import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject
} from './services/projects'
import { v4 as uuidv4 } from 'uuid'
import { createTask, getAllTasks } from './services/tasks'
import TaskInput from './components/TaskInput'
import ActiveTask from './components/ActiveTask'
import Projects from './components/Projects'

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
    createTask({
      name: 'test-task',
      _id: uuidv4(),
      description: 'test task description',
      dueDate: new Date(),
      priority: 'Low',
      totalPomos: 4,
      isCompleted: false,
      subTasks: [
        {
          name: 'test-sub-task',
          isCompleted: false
        }
      ]
    })
    getAllTasks()
    return null
  }

  // For testing purposes created this onCreate function
  return (
    <>
      <h2 onClick={onCreate}>Test create task</h2>
      <div className="my-10">
        <div className="w-[90%] mx-auto">
          <TaskInput />
          <ActiveTask />
          <Projects />
        </div>
      </div>
    </>
  )
}

export default App
