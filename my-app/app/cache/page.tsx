import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Cache</h2>
      <p className="mb-5">
        https://nextjs.org/docs/app/building-your-application/caching
      </p>
      <p className="mb-5">
        Request Memoization: React extends the fetch API to automatically
        memoize requests that have the same URL and options. This means you can
        call a fetch function for the same data in multiple places in a React
        component tree while only executing it once.
      </p>
      <p className="mb-5">
        Data Cache: Next.js has a built-in Data Cache that persists the result
        of data fetches across incoming server requests and deployments. This is
        possible because Next.js extends the native fetch API to allow each
        request on the server to set its own persistent caching semantics.
      </p>
      <p className="mb-5">
        Full Route Cache: Next.js automatically renders and caches routes at
        build time. This is an optimization that allows you to serve the cached
        route instead of rendering on the server for every request.
      </p>
      <p className="mb-5">
        Client-side Router Cache: Next.js has an in-memory client-side router
        cache that stores the RSC payload of route segments, split by layouts,
        loading states, and pages. When a user navigates between routes, Next.js
        caches the visited route segments and prefetches the routes the user is
        likely to navigate to. This results in instant back/forward navigation,
        no full-page reload between navigations, and preservation of React state
        and browser state.
      </p>
      <ul className="list-disc ml-2 mb-5">
        <li>React Rendering on the Server</li>
        <li>
          Rendering work is split in two chunks, each chunk is rendered in two
          steps:
        </li>
        <li>
          React renders Server Components into a special data format, optimized
          for streaming, called the React Server Component Payload.
        </li>
        <li>
          Next.js uses the React Server Component Payload and Client Component
          JavaScript instructions to render HTML on the server.
        </li>
        <li>
          The default behavior of Next.js is to cache the rendered result (React
          Server Component Payload and HTML) of a route on the server. This
          applies to statically rendered routes at build time, or during
          revalidation.
        </li>
        <li>At request time, on the client:</li>
        <li>
          The HTML is used to immediately show a fast non-interactive initial
          preview of the Client and Server Components.
        </li>
        <li>
          The React Server Components Payload is used to reconcile the Client
          and rendered Server Component trees, and update the DOM.
        </li>
        <li>
          The JavaScript instructions are used to hydrate Client Components and
          make the application interactive.
        </li>
        <li>
          The React Server Component Payload is stored in the client-side Router
          Cache - a separate in-memory cache, split by individual route segment.
          This Router Cache is used to improve the navigation experience by
          storing previously visited routes and prefetching future routes.
        </li>
        <li>
          On subsequent navigations or during prefetching, Next.js will check if
          the React Server Components Payload is stored in the Router Cache. If
          so, it will skip sending a new request to the server.
        </li>
        <li>
          If the route segments are not in the cache, Next.js will fetch the
          React Server Components Payload from the server, and populate the
          Router Cache on the client.
        </li>
        <li>
          Note: Whether a route is cached or not at build time depends on
          whether it&apos;s statically or dynamically rendered. Static routes
          are cached by default, whereas dynamic routes are rendered at request
          time, and not cached.
        </li>
      </ul>
      <Image src="/cache-1.png" width={1000} height={1000} alt="Cache 1" />
      <Image src="/cache-2.png" width={1000} height={1000} alt="Cache 2" />
      <Image src="/cache-3.png" width={1000} height={1000} alt="Cache 3" />
    </div>
  )
}
