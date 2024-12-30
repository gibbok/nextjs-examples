import { Suspense } from 'react'
import { Temperatures } from './temperatures'
import { Pollutions } from './pollutions'
// import { Chunks } from './chunks'

export default async function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Dynamic Rendering Straming</h2>
      <p className="mb-5">XXX</p>
      <p className="mb-5">
        One advantage of this approach is that you can significantly reduce your
        page&#39;s overall loading time.
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
