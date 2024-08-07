import { useApiGet } from './services/api'
import { getProjects } from './services/projects'

function App(): JSX.Element {
  const { data, error } = useApiGet(['projects'], getProjects, {
    enabled: true,
    refetchOnWindowFocus: true,
    retry: 1
  })

  console.log('api response', data)
  console.log('api error', error)

  return <h2>Welcome to PoDo</h2>
}

export default App
