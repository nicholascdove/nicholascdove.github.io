export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="py-10 border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {year} Nicholas C. Dove</p>
        <p>
          Built with{' '}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Next.js
          </a>{' '}
          · Hosted on{' '}
          <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub Pages
          </a>
        </p>
      </div>
    </footer>
  )
}
