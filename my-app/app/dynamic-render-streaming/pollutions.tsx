type Pollution = {
  id: number
  city: string
  polution: number
}

const fetchData = (): Promise<Pollution[]> => {
  console.log('xxxxxxx fetching Pollutions')
  return fetch('http://localhost:3001/pollutions').then((response) =>
    response.json()
  )
}

export const Pollutions = async () => {
  const data = await fetchData()
  return (
    <div>
      Pollutions
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
