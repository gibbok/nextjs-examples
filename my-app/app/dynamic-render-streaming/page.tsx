import { Suspense } from 'react'
import { Temperatures } from './temperatures'
import { Pollutions } from './pollutions'

export default async function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Dynamic Rendering Straming</h2>
      <p className="mb-5">XXX</p>
      <p className="mb-5">XXX</p>
      <div className="flex w-max">
        <Suspense fallback={'Loading Temperatures ... '}>
          <Temperatures />
        </Suspense>
        <Suspense fallback={'Loading Pollutions ... '}>
          <Pollutions />
        </Suspense>
      </div>
    </div>
  )
}
