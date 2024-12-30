export default function Home() {
  return (
    <div className="">
      <h1 className="uppercase text-4xl">Server Components</h1>
      <h2 className="text-3xl mb-5">Static Rendering</h2>
      <p className="mb-5">
        Server Components allow you to write UI that can be rendered and
        optionally cached on the server.
      </p>
      <p className="mb-5">
        There are 3 rendering three different server rendering strategies:
      </p>
      <ul className="list-disc ml-2">
        <li>Static Rendering</li>
        <li>Dynamic Rendering</li>
        <li>Streaming</li>
      </ul>
      <h3 className="text-2xl my-8">Static Rendering</h3>
      <p>
        This route is rendered at build time, or in the background after data
        revalidation. The result is cached and can be pushed to a Content
        Delivery Network (CDN). This optimization allows you to share the result
        of the rendering work between users and server requests.
      </p>
    </div>
  )
}
