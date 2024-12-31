type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchData = (): Promise<Todo[]> => {
  console.log('xxxxxxx fetching data')
  return fetch('http://localhost:3001/todos', { cache: 'force-cache' }).then(
    (response) => response.json()
  )
}

// Force the page to be dynamic
export const dynamic = 'force-dynamic'

export default async function Page() {
  const result = await fetchData()

  return (
    <div>
      <h2 className="text-3xl mb-5"> Dynamic Rendering Caching</h2>
      <p className="mb-5">XXX</p>
      <p className="mb-5">XXX</p>
      <ul className="list-disc ml-2 mb-5">
        <li>XXX</li>
        <li>XXX</li>
      </ul>

      <pre>{JSON.stringify(result, undefined, 4)}</pre>
    </div>
  )
}
