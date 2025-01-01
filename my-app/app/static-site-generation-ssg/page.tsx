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

export default async function Page() {
  const result = await fetchData()

  return (
    <div>
      <h2 className="text-3xl mb-5">Static Site Generation (SSG)</h2>
      <p className="mb-5">
        If a page uses Static Generation, the page HTML is generated at build
        time. That means in production, the page HTML is generated when you run
        next build. This HTML will then be reused on each request. It can be
        cached by a CDN.
      </p>
      <ul className="list-disc ml-2">
        <li>
          During the build process (`next build`), Next.js will execute the
          `Page` component, including the `fetchData` function (from this
          example page code).
        </li>
        <li>The data is fetched from the external API at build time.</li>
        <li>
          Next.js generates static HTML based on the component&apos;s render
          output, which includes the fetched data.
        </li>
        <li>This static HTML is then served for subsequent requests.</li>
      </ul>
      <p className="my-5">
        The reason this happens despite the `async` function and `fetch` call is
        that Next.js attempts to statically optimize pages when possible. In
        this case, since there are no dynamic elements (like `useSearchParams`,
        `cookies`, etc.) that would require per-request execution, Next.js
        treats this as a static page.
      </p>
      <p className="mb-5">
        This feature is ideal for sites with articles or posts that don&apos;t
        require frequent updates. It can work together with headless CMS like
        Contentful to fetch and render content at build time. Triggering static
        site builds can be done using webhooks.
      </p>

      <Image
        src="/ssg-1.png"
        width={1000}
        height={500}
        alt="Dynamic Render 1"
      />
      <Image
        src="/ssg-2.png"
        width={1000}
        height={500}
        alt="Dynamic Render 2"
      />
      <pre>{JSON.stringify(result, undefined, 4)}</pre>
    </div>
  )
}
