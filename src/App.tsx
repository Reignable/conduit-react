import { useSuspenseQuery } from '@tanstack/react-query'

const getTodos = () => fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())

function App() {
  const { data } = useSuspenseQuery({ queryKey: ['todos'], queryFn: getTodos })

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

export default App
