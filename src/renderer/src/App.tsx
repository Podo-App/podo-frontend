import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject
} from './services/projects'
import { v4 as uuidv4 } from 'uuid'

function App(): JSX.Element {
  const onCreate = (): unknown => {
    createProject({ name: 'test-project', _id: uuidv4() })
    console.log('get project', getProjectById('b10e7c33-336e-4dfb-8fad-0ed43a702703'))
    updateProject({
      name: 'title update',
      _rev: '1-462da7ef179101dacd44aae392553a57',
      _id: 'b10e7c33-336e-4dfb-8fad-0ed43a702703'
    })
    deleteProject('b10e7c33-336e-4dfb-8fad-0ed43a702703')
    getAllProjects()
    return null
  }
  // For testing purposes created this onCreate function
  return <h2 onClick={onCreate}>Welcome to PoDo</h2>
}

export default App
