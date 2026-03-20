export default function CV() {
  return (
    <section id="cv" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <p className="section-subtext">Background</p>
        <h2 className="section-heading">Curriculum Vitae</h2>

        <div className="mt-10 flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-1 max-w-lg">
            <p className="text-gray-600 leading-relaxed mb-6">
              My CV includes a full record of my academic and professional experience —
              education, publications, grants, presentations, and skills.
            </p>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Timeline snapshot */}
          <div className="flex-1 max-w-sm space-y-4">
            {[
              { period: '2024 – Present', role: 'Senior Bioinformatician', org: 'Mayo Clinic' },
              { period: '2021 – 2024', role: 'Bioinformatician / Microbiologist', org: 'AgBiome' },
              { period: '2019 – 2021', role: 'Postdoctoral Researcher', org: 'Oak Ridge National Laboratory' },
              { period: '2013 – 2019', role: 'Ph.D. Microbiology', org: 'UC Merced' },
            ].map((item) => (
              <div key={item.period} className="flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <div className="w-px flex-1 bg-gray-200 mt-1" />
                </div>
                <div className="pb-4">
                  <p className="text-xs text-gray-400 font-medium">{item.period}</p>
                  <p className="text-sm font-semibold text-gray-800">{item.role}</p>
                  <p className="text-sm text-gray-500">{item.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
