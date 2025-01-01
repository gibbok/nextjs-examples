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
      <p className="mb-5">x</p>
      <p className="mb-5">x</p>
      <p className="mb-5">x</p>

      <FormCreateComment />
    </div>
  )
}
