import { ButtonInvalidate } from './button-invalidate'

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default async function Page() {
  // Cached, response was retrieved from layout and this request won't run within 10 seconds
  const data = await fetch('http://localhost:3001/todos', {
    // cache: 'force-cache',
    next: { revalidate: 10 },
  }).then((response) => {
    console.log('fetch data')
    return response.json()
  })

  return (
    <div>
      <h2 className="text-3xl mb-5"> Dynamic Rendering Caching</h2>
      <p className="mb-5">
        Fetch of data on the server can be cached, and invalidated in different
        ways.
      </p>
      <p className="mb-5">
        To cache data we can use the `fetch` API, please note the `fetch` must
        be used directly in the component and not wrapped in some other
        functions in order to Next.js automatically cache the result of the
        `fetch`.
      </p>
      <p className="mb-5">
        If the `fetch` function is nested in another function, or we use a ORM,
        we need to wrap this functions into `unstable_cache` function (from
        Next.js) so they can be cached properly.
      </p>
      <p className="mb-5">
        The `fetch` function in Next.js has some options object to be passed,
        they control how caching and revalidation works. To reuse data across
        multiple functions (the request is memoized) we can pass to `fetch`
        object `cache: force-cache`, this means you can safely call the same URL
        with the same options, and only one request will be made.
      </p>
      <p className="mb-5">
        We can also pass an object for options to `fetch` next as `revalidate`,
        this set the default revalidation time for the request (time based
        invalidation).
        <br />
        https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
        <br />
        https://nextjs.org/docs/app/api-reference/functions/fetch#optionscache
      </p>
      <ul className="list-disc ml-2 mb-5">
        <li>
          Fetch `options.cache` option: `auto no cache`: In development: Fetches
          data on request. In production: Fetches data only during the build
          process.
          <br />
          `no-store`: Fetches data on every request without caching.
          <br />
          `force-cache`: Checks the cache for a match. If a match is found and
          fresh, it returns the cached data. If no match is found or the cache
          is stale, it fetches the data from the source and updates the cache.
          <br />
        </li>
        <li>
          Fetch `options.next.revalidate`
          <br />
          `false`: Caches the resource indefinitely, though HTTP cache entries
          may be evicted over time.
          <br />
          `0`: Prevents the resource from being cached.
          <br />
          `number`: Specifies the number of seconds the resource should be
          cached.
          <br />
        </li>
        <li>
          Fetch `options.next.tags`
          <br />
          `[string]`: An array of strings used to set cache tags for a resource.
          The data can then be revalidated on demand using `revalidateTag``.
        </li>
      </ul>
      <p className="mb-5">
        To purge cache-data on demand we can use:
        <br />
        `revalidatePath()`: Purges cached data on demand for a specific path.
        <br />
        `revalidateTag()`: Purges cached data on demand for a specific cache
        tag.
        <br />
      </p>
      <ButtonInvalidate />
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
