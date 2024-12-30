import Image from 'next/image'

type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchData = (): Promise<Todo[]> => {
  console.log('xxxxxxx fetching data')
  return fetch('https://jsonplaceholder.typicode.com/todos/').then((response) =>
    response.json()
  )
}

export default async function Page() {
  const result = await fetchData()

  return (
    <div className="">
      <h1 className="uppercase text-4xl">Server Components</h1>
      <h2 className="text-3xl mb-5">Dynamic Rendering</h2>
      <p className="mb-5">
        With Dynamic Rendering, routes are rendered for each user at request
        time.
      </p>
      <p className="mb-5">
        Dynamic rendering is useful when a route has data that is personalized
        to the user or has information that can only be known at request time,
        such as cookies or the URL&apos;s search params.
      </p>
      <p className="mb-5">
        In Next.js, you can have dynamically rendered routes that have both
        cached and uncached data. This is because the RSC Payload and data are
        cached separately. This allows you to opt into dynamic rendering without
        worrying about the performance impact of fetching all the data at
        request time.
      </p>
      <Image
        src="/dynamic-render-1.png"
        width={1000}
        height={500}
        alt="Dynamic Render 1"
      />
      <Image
        src="/dynamic-render-2.png"
        width={1000}
        height={500}
        alt="Dynamic Render 2"
      />
      <pre>{JSON.stringify(result, undefined, 4)}</pre>
    </div>
  )
}
