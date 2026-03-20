import { type Publication, formatAuthors, isMyName } from '@/lib/publications'

function AuthorList({ authors }: { authors: Publication['authors'] }) {
  return (
    <span className="text-gray-500 text-sm">
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ', '}
          <span className={isMyName(a.name) ? 'font-semibold text-gray-700' : ''}>
            {a.name}
          </span>
        </span>
      ))}
    </span>
  )
}

function PubCard({ pub }: { pub: Publication }) {
  const href = pub.doi
    ? `https://doi.org/${pub.doi}`
    : pub.openAccessPdf ?? pub.url

  return (
    <div className="py-5 border-b border-gray-100 last:border-0 group">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium text-sm leading-snug hover:text-accent transition-colors line-clamp-2"
          >
            {pub.title}
          </a>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <AuthorList authors={pub.authors} />
          </div>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            {pub.journal && (
              <span className="text-xs text-gray-400 italic">{pub.journal}</span>
            )}
            {pub.year && (
              <span className="text-xs text-gray-400">{pub.year}</span>
            )}
            {pub.openAccessPdf && (
              <a
                href={pub.openAccessPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent hover:text-accent-dark transition-colors"
              >
                PDF
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Publications({ publications }: { publications: Publication[] }) {
  if (publications.length === 0) {
    return (
      <section id="publications" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-subtext">Research</p>
          <h2 className="section-heading">Publications</h2>
          <p className="text-gray-500 mt-8">
            Publications could not be loaded. View them on{' '}
            <a
              href="https://scholar.google.com/citations?user=QJgDCroAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Scholar
            </a>{' '}
            or{' '}
            <a
              href="https://www.semanticscholar.org/author/Nicholas-C.-Dove/48162592"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Semantic Scholar
            </a>.
          </p>
        </div>
      </section>
    )
  }

  // Group by year
  const byYear = publications.reduce<Record<number, Publication[]>>((acc, pub) => {
    const yr = pub.year ?? 0
    if (!acc[yr]) acc[yr] = []
    acc[yr].push(pub)
    return acc
  }, {})

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <section id="publications" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-subtext">Research</p>
        <h2 className="section-heading">Publications</h2>
        <p className="text-sm text-gray-400 mb-10">
          {publications.length} publications · auto-synced from{' '}
          <a
            href="https://www.semanticscholar.org/author/Nicholas-C.-Dove/48162592"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Semantic Scholar
          </a>
        </p>

        <div className="space-y-10">
          {years.map((year) => (
            <div key={year}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                {year}
              </h3>
              <div className="bg-white rounded-2xl border border-gray-200 px-6">
                {byYear[year].map((pub) => (
                  <PubCard key={pub.paperId} pub={pub} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
