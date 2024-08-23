import { Poppins } from 'next/font/google'
import './globals.css'
// import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from 'next-themes'
import { Metadata } from 'next'
import { Toaster } from './components/ui/toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jonathan Pe',
  description: 'Personal Software Engineering portfolio/website of Jonathan Pe',
  keywords: [
    'Jonathan Pe',
    'Software Engineer',
    'Web Developer',
    'Frontend Engineer',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'shadcn',
    'portfolio',
    'resume',
    'personal website',
    'server components',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={poppins.className}>
        <ThemeProvider enableColorScheme>
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
