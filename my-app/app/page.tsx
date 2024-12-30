export default function Home() {
  return (
    <div className="">
      <h1 className="uppercase text-2xl">Server Components</h1>
      <h2 className="mb-5">Static Rendering</h2>
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
    </div>
  )
}
