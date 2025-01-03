import Image from 'next/image'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchData = (): Promise<Todo[]> => {
  console.log('xxxxxxx fetching data')
  return fetch('http://localhost:3001/todos').then((response) =>
    response.json()
  )
}

// Force the page to be dynamic
export const dynamic = 'force-dynamic'

export default async function Page() {
  const result = await fetchData()

  return (
    <div>
      <h2 className="text-3xl mb-5"> Dynamic Rendering</h2>
      <p className="mb-5">
        With dynamic rendering, content is rendered on the server for each user
        at request time (when the user visits the page). Useful for: Real-Time
        data, User-Specific Content, Request Time Information (based on cookies,
        URL search parameters).
      </p>
      <p className="mb-5">
        A page becomes dynamic when the following features are used:
      </p>
      <ul className="list-disc ml-2 mb-5">
        <li>
          Use of dynamic functions: If a page or layout uses dynamic functions
          such as `cookies()`, `headers()`, or `useSearchParams()`, it will be
          rendered dynamically.
        </li>
        <li>
          Server Actions: If a page or layout uses Server Actions, it will be
          rendered dynamically.
        </li>
        <li>
          Explicit configuration: You can explicitly set a route to be dynamic
          by using the `force-dynamic` (used in this code example) option in the
          route segment config.
        </li>
        <li>
          Uncached data fetching: If you use `fetch()` requests without caching
          (e.g., `cache: no-store` ), this will trigger dynamic rendering.
        </li>
        <li>
          Dynamic route segments: If you have dynamic route segments (e.g.,
          `[id]`) and `dynamicParams` is set to true (which is the default), the
          route will be dynamically rendered for any params not generated by
          `generateStaticParams`.
        </li>
      </ul>

      <Image
        src="/dynamic-render-1.png"
        width={1000}
        height={500}
        alt="Dynamic Render 1"
      />

      <pre>{JSON.stringify(result, undefined, 4)}</pre>
    </div>
  )
}
