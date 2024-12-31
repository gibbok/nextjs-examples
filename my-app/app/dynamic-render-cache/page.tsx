export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default async function Page() {
  // Cached, response was retrieved from layout and this request won't run within 10 seconds
  const data = await fetch('http://localhost:3001/todos', {
    next: { revalidate: 10 },
  }).then((response) => {
    console.log('fetch data')
    return response.json()
  })

  return (
    <div>
      <h2 className="text-3xl mb-5"> Dynamic Rendering Caching</h2>
      <p className="mb-5">XXX</p>
      <p className="mb-5">XXX</p>
      <ul className="list-disc ml-2 mb-5">
        <li>XXX</li>
        <li>XXX</li>
      </ul>

      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
