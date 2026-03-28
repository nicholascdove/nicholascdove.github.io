import Image from 'next/image'

interface Project {
  title: string
  subtitle: string
  description: string
  tags: string[]
  image: string
  link?: string
  linkLabel?: string
}

const projects: Project[] = [
  {
    title: 'Post-Fire Microbial Ecosystem Recovery',
    subtitle: 'Ph.D. · UC Merced',
    description:
      'Used shotgun metagenomics and biogeochemical assays to understand how high-severity wildfire affects soil microbial communities in the Sierra Nevada. Established a fire chronosequence to track recovery trajectories over time and identify the microbial mechanisms driving — or limiting — ecosystem resilience.',
    tags: ['Metagenomics', 'Microbial Ecology', 'Fire Ecology', 'Biogeochemistry'],
    image: '/images/projects/fire.jpg',
    link: 'https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/eap.2072',
    linkLabel: 'View Publication',
  },
  {
    title: 'Plant–Microbe Interactions Multi-Omics',
    subtitle: 'Postdoc · Oak Ridge National Laboratory',
    description:
      'Investigated the temporal dynamics of plant microbiome community assembly as part of the DOE Plant Microbe Interfaces Scientific Focus Area. Applied integrated multi-omics approaches — including metagenomics, metatranscriptomics, and metabolomics — to characterize how plants and microbes shape each other\'s molecular environments.',
    tags: ['Multi-omics', 'Plant Microbiome', 'Metatranscriptomics', 'Metabolomics'],
    image: '/images/projects/pmi.png',
    link: 'https://pmiweb.ornl.gov/',
    linkLabel: 'View Project',
  },
  {
    title: 'Biosurfactant Discovery Workflows',
    subtitle: 'AgBiome',
    description:
      'Designed and built novel bioinformatics pipelines to support biosurfactant discovery from microbial genome databases. Demonstrated how computational approaches can accelerate early-stage R&D by identifying candidate genes and organisms — a case study in translating bioinformatics methods to address real business needs.',
    tags: ['Pipeline Development', 'Genomics', 'Applied Bioinformatics', 'Drug Discovery'],
    image: '/images/projects/biosurfactant.png',
  },
  {
    title: 'Chance-it',
    subtitle: 'Personal Project',
    description:
      'A deeply serious tool for Bayesian decision-making under uncertainty.You are shown an artist drawn from a curated prior distribution. You can accept it — locking in your known utility — or you can chance it, sampling from the posterior with replacement. The catch, of course, is that the distribution is flat. Every artist has equal probability mass. Your prior is irrelevant.',
    tags: ['Python', 'Flask', 'Google Sheets API', 'Web App'],
    image: '/images/projects/chanceit.png',
    link: 'https://github.com/nicholascdove/chance_it',
    linkLabel: 'View on GitHub',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 bg-gray-100 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5">
            <svg className="w-12 h-12 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">
          {project.subtitle}
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
          >
            {project.linkLabel ?? 'Learn more'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-subtext">Work</p>
        <h2 className="section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
