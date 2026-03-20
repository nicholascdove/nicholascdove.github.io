import type { Metadata } from 'next'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nicholas C. Dove',
  description:
    'Senior Bioinformatician at Mayo Clinic. Microbial ecology, multi-omics, and computational biology.',
  openGraph: {
    title: 'Nicholas C. Dove',
    description: 'Senior Bioinformatician at Mayo Clinic.',
    url: 'https://nicholascdove.github.io',
    siteName: 'Nicholas C. Dove',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
