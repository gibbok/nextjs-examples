import { FormCreateComment } from './form'

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Server Actions and Mutations</h2>
      <p className="mb-5">
        Server Actions are asynchronous functions that are executed on the
        server. They can be called in Server and Client Components to handle
        form submissions and data mutations in Next.js applications.
      </p>
      <p className="mb-5">
        Behind the scenes, actions use the POST method, and only this HTTP
        method can invoke them.
      </p>
      <p className="mb-5">
        Server Actions are functions. This means they can be reused anywhere in
        your application.
      </p>
      <ul className="list-disc ml-2 mb-5">
        <li>
          Server Components support progressive enhancement by default. Works
          even with no JS enabled.
        </li>
        <li>
          In Client Components, forms invoking Server Actions will queue
          submissions if JavaScript isn&apos;t loaded yet, prioritizing client
          hydration.After hydration, the browser does not refresh on form
          submission.
        </li>
        <li>Server Actions can be invoked from event handlers or useEffect.</li>
        <li>
          Server Actions integrate caching and revalidation architecture. When
          an action is invoked, Next.js can return both the updated UI and new
          data in a single server roundtrip.
        </li>
        <li></li>
        <li></li>
      </ul>
      <p className="mb-5">x</p>
      <p className="mb-5">x</p>
      <p className="mb-5">x</p>

      <FormCreateComment />
    </div>
  )
}
