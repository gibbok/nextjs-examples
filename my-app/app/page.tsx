import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      <h1 className="uppercase text-4xl">Server Components</h1>
      <h2 className="text-3xl mb-5">Static Rendering</h2>
      <p>
        This route is rendered at build time, or in the background after data
        revalidation (ISR). The result is cached and can be pushed to a Content
        Delivery Network (CDN). This optimization allows you to share the result
        of the rendering work between users and server requests.
      </p>
      <Image
        src="/static-render-1.png"
        width={1000}
        height={1000}
        alt="Static Render 1"
      />
      <Image
        src="/static-render-2.png"
        width={1000}
        height={1000}
        alt="Static Render 2"
      />
    </div>
  )
}
