import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Startup Landing',
  description:
    'Production-ready AI/SaaS landing page template built with Next.js 15, TypeScript, Tailwind CSS and shadcn/ui.',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
