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
        we need to wrap this functions into `unstable_cache` (from Next.js) so
        they can be cached properly.
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
          Fetch `options.cache` option: `auto no cache`: in dev fetch on request
          in prod, fetch on build only.
          <br />
          `no-store`: fetch every request, no cache
          <br />
          `force-cache`: looks for a match in cache, if match and fresh, return
          from cache, if no match or stale, fetch from source and update the
          cache
          <br />
        </li>
        <li>
          Fetch `options.next.revalidate`
          <br />
          `false`: cache the indefinitely, HTTP cache may be evicted order
          resources over time.
          <br />
          `0`: prevent resource to being cached
          <br />
          `number`: seconds the resource should be cached
          <br />
        </li>
        <li>
          Fetch `options.next.tags`
          <br />
          `[string]`: array of string, set the cache tags for a resource. Data
          can then be revalidated on-demand using revalidateTag.
        </li>
      </ul>
      <p className="mb-5">
        To purge cache-data on demand we can use:
        <br />
        `revalidatePath()` allows you to purge cached data on-demand for a
        specific path.
        <br />
        `revalidateTag()` allows you to purge cached data on-demand for a
        specific cache tag.
        <br />
      </p>
      <ButtonInvalidate />
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
