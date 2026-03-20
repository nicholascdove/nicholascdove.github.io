import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import CV from '@/components/CV'
import Footer from '@/components/Footer'
import { getPublications } from '@/lib/publications'

export default async function Home() {
  const publications = await getPublications()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Publications publications={publications} />
        <CV />
      </main>
      <Footer />
    </>
  )
}
