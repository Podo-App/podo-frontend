import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  updateProject
} from './services/projects'
import { v4 as uuidv4 } from 'uuid'
import { activateTask, createTask, getAllTasks } from './services/tasks'
import TaskInput from './components/TaskInput'
import ActiveTask from './components/ActiveTask'

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
      <h2
        onClick={() => {
          onCreate()
          // createTask({
          //   name: 'test-task',
          //   _id: uuidv4(),
          //   description: 'test task description',
          //   dueDate: new Date(),
          //   priority: 'Low',
          //   totalPomos: 4,
          //   isCompleted: false,
          //   subTasks: [
          //     {
          //       name: 'test-sub-task',
          //       isCompleted: false
          //     }
          //   ]
          // })
        }}
      >
        Create a task
      </h2>
      <h2
        onClick={async () => {
          await activateTask('3f5571c1-76a9-4d05-bbad-d5c9dfcd0424')
          // activateTask('e3079850-20d2-4cb4-9581-70e1c06af322')
        }}
      >
        activate task 3f5571c1-76a9-4d05-bbad-d5c9dfcd0424
      </h2>
      <h2
        onClick={async () => {
          await getAllTasks()
        }}
      >
        get tasks
      </h2>
      <div className="">
        <h2 onClick={onCreate}>Welcome to PoDo</h2>
        <div className="w-[90%] mx-auto">
          <TaskInput />
          <ActiveTask />
        </div>
      </div>
    </>
  )
}

export default App
