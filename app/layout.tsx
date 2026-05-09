import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Basa Sindhu Latha | Backend Developer & Systems Engineer',
  description: 'Backend-focused software developer specializing in scalable systems, distributed architectures, and high-performance APIs. Building robust solutions with modern technologies.',
  keywords: ['Backend Developer', 'Software Engineer', 'Distributed Systems', 'System Design', 'API Development', 'Node.js', 'Java', 'Python'],
  authors: [{ name: 'Basa Sindhu Latha' }],
  creator: 'Basa Sindhu Latha',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Basa Sindhu Latha | Backend Developer & Systems Engineer',
    description: 'Backend-focused software developer specializing in scalable systems and distributed architectures.',
    siteName: 'Basa Sindhu Latha Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basa Sindhu Latha | Backend Developer',
    description: 'Backend-focused software developer specializing in scalable systems and distributed architectures.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0B0F19',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
