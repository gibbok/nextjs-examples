import Image from 'next/image'
import { Suspense } from 'react'
import { Temperatures } from '../dynamic-render-streaming/temperatures'

// export const experimental_ppr = true

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Partial Prerendering PPR</h2>
      <p className="mb-5">
        Partial Prerendering (PPR) enables you to combine static and dynamic
        components together in the same route. This is an experimental feature.
      </p>
      <p className="mb-5">
        During the build, Next.js prerenders as much of the route as possible.
        If dynamic code is detected, like reading from the incoming request, you
        can wrap the relevant component with a React Suspense boundary. The
        Suspense boundary fallback will then be included in the prerendered
        HTML. https://www.youtube.com/watch?v=MTcPrTIBkpA
      </p>
      <p className="mb-5">
        To prevent creating many HTTP requests for each dynamic component, PPR
        is able to combine the static prerender and dynamic components together
        into a single HTTP request. This ensures there are not multiple network
        roundtrips needed for each dynamic component.
      </p>
      <Image src="/ppr-1.png" width={1000} height={1000} alt="PPR 1" />
      <Suspense fallback={'Loading Temperatures ... '}>
        <Temperatures />
      </Suspense>
    </div>
  )
}