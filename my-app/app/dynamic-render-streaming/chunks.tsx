type Chunk = {
  type: string
  chunk: number
}

const fetchData = (): Promise<Chunk[]> => {
  console.log('xxxxxxx fetching Chunks')
  return fetch('http://localhost:3001/chunks').then((response) =>
    response.json()
  )
}

export const Chunks = async () => {
  const data = await fetchData()
  return (
    <div>
      Chunks
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
