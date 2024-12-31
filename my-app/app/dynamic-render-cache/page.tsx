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
        way
      </p>
      <p className="mb-5">
        To cache data we can use the `fetch` API, please note the `fetch` must
        be used directly in the component and not wrapped in some other function
        in order to Next.js automatically cache the result of the `fetch`.
      </p>
      <p className="mb-5">
        If the `fetch` function is nested in another function, or we use a ORM,
        we need to wrap this functions into `unstable_cache` (from Next.js) so
        they can be cache properly).
      </p>
      <p className="mb-5">
        The `fetch` function in Next.js has some options object to be passed
        they cotrol how caching and revaliadation works. To reuse data across
        multiple function (the reqeust is memoized) we can pass to `fetch`
        object `cache: forced`, this means you can safely call the same URL with
        the same options, and only one request will be made.
      </p>
      <p className="mb-5">
        We can also object option to `fetch` next as `revalidate`, this set the
        default revalidation time for the request (time based invalidation).
        https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
      </p>
      <ul className="list-disc ml-2 mb-5">
        <li>XXX</li>
        <li>XXX</li>
      </ul>

      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
