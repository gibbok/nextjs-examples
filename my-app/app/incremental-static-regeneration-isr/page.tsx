import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <h2 className="text-3xl mb-5">Incremental Static Regeneration (ISR)</h2>
      <p className="mb-5">
        Allows you to create or update content on your site without redeploying
      </p>
      <p className="mb-5">
        Benefits: Incremental Static Regeneration (ISR) enables fast, globally
        cached static pages by leveraging Vercel&apos;s Edge Network and durable
        storage. It reduces backend load by caching content and prevents calling
        the data store and minimizes build times by generating pages on demand
        or via API instead of during the build process.
      </p>
      <p className="mb-5">
        Difficult to implement outside Vercel&apos;s infrastructure.
      </p>
      <p className="mb-5">
        Next.js will automatically create a Serverless Vercel Function that can
        revalidate when you add next: `revalidate: 10` to the options object
        passed to a fetch request.
      </p>
      <Image src="/isr-1.png" width={1000} height={1000} alt="ISR 1" />
      <Image src="/isr-2.png" width={1000} height={1000} alt="ISR 2" />
    </div>
  )
}
