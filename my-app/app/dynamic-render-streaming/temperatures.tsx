type Temperature = {
  id: number
  city: string
  temperature: number
}

const fetchData = (): Promise<Temperature[]> => {
  console.log('xxxxxxx fetching temperatures')
  return fetch('http://localhost:3001/temperatures').then((response) =>
    response.json()
  )
}

export const Temperatures = async () => {
  const data = await fetchData()
  return (
    <div>
      Temperatures
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}
