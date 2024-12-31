import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  console.log('metadata')
  // This fetch will run and will be memonize, the same request in page.tsx will not run within 10 seconds
  const data = await fetch('http://localhost:3001/todos', {
    // cache: 'force-cache',
    next: { revalidate: 10 },
  }).then((response) => {
    console.log('fetch data')
    return response.json()
  })

  return {
    title: data[0].title,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main>{children}</main>
}
