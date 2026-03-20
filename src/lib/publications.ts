export interface Author {
  authorId: string | null
  name: string
}

export interface Publication {
  paperId: string
  title: string
  year: number | null
  authors: Author[]
  journal: string | null
  doi: string | null
  openAccessPdf: string | null
  url: string
}

const AUTHOR_ID = '48162592'
const MY_NAME = 'Nicholas C. Dove'

export async function getPublications(): Promise<Publication[]> {
  const fields = 'title,year,authors,journal,externalIds,openAccessPdf,url'
  const url = `https://api.semanticscholar.org/graph/v1/author/${AUTHOR_ID}/papers?fields=${fields}&limit=100`

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'nicholascdove.github.io/1.0' },
      next: { revalidate: false },
    })

    if (!res.ok) {
      console.error(`Semantic Scholar API error: ${res.status}`)
      return []
    }

    const data = await res.json()
    const papers: Publication[] = (data.data ?? []).map((p: any) => ({
      paperId: p.paperId,
      title: p.title,
      year: p.year ?? null,
      authors: p.authors ?? [],
      journal: p.journal?.name ?? null,
      doi: p.externalIds?.DOI ?? null,
      openAccessPdf: p.openAccessPdf?.url ?? null,
      url: p.url ?? `https://www.semanticscholar.org/paper/${p.paperId}`,
    }))

    return papers
      .filter((p) => p.year !== null)
      .sort((a, b) => (b.year ?? 0) - (a.year ?? 0))
  } catch (err) {
    console.error('Failed to fetch publications:', err)
    return []
  }
}

export function formatAuthors(authors: Author[]): string {
  return authors
    .map((a) => {
      const parts = a.name.split(' ')
      if (parts.length < 2) return a.name
      const lastName = parts[parts.length - 1]
      const initials = parts
        .slice(0, -1)
        .map((p) => p[0] + '.')
        .join(' ')
      return `${initials} ${lastName}`
    })
    .join(', ')
}

export function isMyName(name: string): boolean {
  return name.toLowerCase().includes('dove')
}
