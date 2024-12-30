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
      <p className="mb-5">XXX</p>
      <Image
        src="/static-render-1.png"
        width={1000}
        height={1000}
        alt="Static Render 1"
      />
      <Image
        src="/static-render-2.png"
        width={1000}
        height={1000}
        alt="Static Render 2"
      />
    </div>
  )
}
