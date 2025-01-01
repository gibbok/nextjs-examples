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
        memoize requests that have the same URL and options.This means you can
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

      <Image src="/cache-1.png" width={1000} height={1000} alt="Cache 1" />
      <Image src="/cache-2.png" width={1000} height={1000} alt="Cache 2" />
    </div>
  )
}
