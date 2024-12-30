import { Suspense } from 'react'
import { Temperatures } from './temperatures'
import { Pollutions } from './pollutions'
// import { Chunks } from './chunks'

export default async function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Dynamic Rendering Straming</h2>
      <p className="mb-5">
        Streaming enables you to progressively render UI from the server. Work
        is split into chunks and streamed to the client as it becomes ready.
        This allows the user to see parts of the page immediately, before the
        entire content has finished rendering.
      </p>
      <p className="mb-5">
        Streaming is built into the Next.js App Router by default. You can start
        streaming route segments using loading.js and UI components with React
        Suspense.
      </p>
      <p className="mb-5">
        One advantage of this approach is that you can significantly reduce your
        page&apos;s overall loading time.
      </p>
      <div className="flex w-max">
        <Suspense fallback={'Loading Temperatures ... '}>
          <Temperatures />
        </Suspense>
        <Suspense fallback={'Loading Pollutions ... '}>
          <Pollutions />
        </Suspense>
        {/* <Suspense fallback={'Loading Chunks ... '}>
          <Chunks />
        </Suspense> */}
      </div>
    </div>
  )
}
