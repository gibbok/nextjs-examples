import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex m-5">
          <nav className="flex flex-col mr-10">
            Server Side
            <ul className="list-disc ml-2 w-48">
              <li>
                <Link className="underline" href="/">
                  Static Rendering
                </Link>
              </li>
              <li>
                <Link className="underline" href="/static-site-generatiorn-ssg">
                  Static Site Generation (SSG)
                </Link>
              </li>
              <li>
                <Link className="underline" href="/dynamic-render">
                  Dynamic Rendering
                </Link>
              </li>
              <li>
                <Link className="underline" href="/dynamic-render-streaming">
                  Dynamic Rendering with Streaming
                </Link>
              </li>
              <li>
                <Link className="underline" href="/partial-pre-rendering-ppr">
                  Partial Prerendering (PPR)
                </Link>
              </li>
              <li>
                <Link className="underline" href="">
                  TODO Incremental Static Regeneration (ISR)
                </Link>
              </li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
