import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Cache</h2>
      <p className="mb-5">xxx</p>

      <p className="mb-5">
        https://nextjs.org/docs/app/building-your-application/caching
      </p>
      <p className="mb-5">
        On the server, Next.js uses React&apos;s APIs to orchestrate rendering.
        The rendering work is split into chunks: by individual route segments
        and Suspense Boundaries
      </p>

      <Image src="/cache-1.png" width={1000} height={1000} alt="Cache 1" />
      <Image src="/cache-2.png" width={1000} height={1000} alt="Cache 2" />
    </div>
  )
}
