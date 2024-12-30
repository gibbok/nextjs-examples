import Counter from './counter'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Hydratation</h2>
      <p className="mb-5">
        Hydration is the process of transforming pre-rendered server-side
        content into an interactive user interface on the client side. When a
        user accesses a pre-rendered page, Next.js promptly sends the fully
        rendered HTML content to the client&apos;s browser, complete with
        initial data and UI from the server. Then, client-side JavaScript
        &quot;hydrates&quot; this static content, imbuing it with interactivity
        to form a fully functional React application.
      </p>

      <p className="mb-5">
        Page linked from `Link` component from Next.js can be prefetched to
        improve performance. Prefetch works only in production mode. When
        prefetched, the RSC Payload is loaded in advanced so on the request the
        new page can be hydratate faster.
      </p>
      <p className="mb-5">
        On the server, Next.js uses React&apos;s APIs to orchestrate rendering.
        The rendering work is split into chunks: by individual route segments
        and Suspense Boundaries
      </p>
      <p className="mb-5">
        The RSC Payload is a compact binary representation of the rendered React
        Server Components tree. It&apos;s used by React on the client to update
        the browser&apos;s DOM. The RSC Payload contains: The rendered result of
        Server Components Placeholders for where Client Components should be
        rendered and references to their JavaScript files Any props passed from
        a Server Component to a Client Component.
      </p>
      <p className="mb-5">
        Each chunk is rendered in two steps: React renders Server Components
        into a special data format called the React Server Component Payload
        (RSC Payload).
        <br />
        Next.js uses the RSC Payload and Client Component JavaScript
        instructions to render HTML on the server.
        <br />
        Then, on the client: The HTML is used to immediately show a fast
        non-interactive preview of the route, this is for the initial page load
        only.
        <br />
        The React Server Components Payload is used to reconcile the Client and
        Server Component trees, and update the DOM. The JavaScript instructions
        are used to hydrate Client Components and make the application
        interactive.
      </p>
      <div className="my-5">
        <Counter />
      </div>
      <Image
        src="/prefetch-1.png"
        width={1000}
        height={1000}
        alt="Prefetch 1"
      />
      <Image
        src="/prefetch-2.png"
        width={1000}
        height={1000}
        alt="Prefetch 2"
      />
    </div>
  )
}
