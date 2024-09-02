import { CreateDocSuccessResponse, GetMeta } from '@renderer/types/common'
import { CreateTaskRequest, UpdateTaskRequest } from '@renderer/types/task'
import PouchDB from 'pouchdb'

const db = new PouchDB('podo_tasks')
const activeTaskDB = new PouchDB('podo_activetask')

export const updateActiveStatus = async ({ currentActiveTask, newActiveTask }): unknown => {
  try {
    // Make the new task active
    const newActiveTaskResp = await db.get(newActiveTask)
    const newTaskUpdateSuccess = await db.put({
      _id: newActiveTask,
      _rev: newActiveTaskResp._rev,
      active: true
    })

    if (newTaskUpdateSuccess?.ok) {
      // Make the existing task inactive
      const currentActiveTaskResp = await db.get(currentActiveTask)
      const currentTaskUpdateSuccess = await db.put({
        _id: currentActiveTask,
        _rev: currentActiveTaskResp?._rev,
        active: false
      })

      if (currentTaskUpdateSuccess?.ok) {
        // Update the active task ID
        const activeTaskResp = await activeTaskDB.get('activeTask')
        await activeTaskDB.put({
          _id: 'activeTask',
          taskId: newActiveTask,
          _rev: activeTaskResp?._rev
        })
      }
    }
  } catch (err) {
    console.error('Error updating active status:', err)
  }
}

export const activateTask = async (id: string): unknown => {
  try {
    // Check if any existing task is active
    const activeTaskResp = await activeTaskDB.get('activeTask')
    console.log(activeTaskResp)

    if (activeTaskResp?.taskId) {
      // If a task is already active, update statuses
      await updateActiveStatus({
        currentActiveTask: activeTaskResp.taskId,
        newActiveTask: id
      })
    } else {
      // If no task is active, make the new task active
      const taskResp = await db.get(id)
      const taskUpdateSuccess = await db.put({
        _id: id,
        _rev: taskResp._rev,
        active: true
      })

      if (taskUpdateSuccess?.ok) {
        await activeTaskDB.put({
          _id: 'activeTask',
          taskId: id
        })
      }
    }
  } catch (error) {
    console.error('Error activating task:', error)
  }
}

// create a Task
export const createTask = (data: CreateTaskRequest): unknown => {
  db.put(data)
    .then((response: CreateDocSuccessResponse) => {
      console.log(`Task created with id: ${response.id}`)
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// update task
export const updateTask = (data: UpdateTaskRequest): unknown => {
  db.put(data)
    .then((response: CreateDocSuccessResponse) => {
      console.log(`Task updated with id: ${response.id}`, response)
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// get task by id
export const getTaskById = (id: string): unknown => {
  db.get(id)
    .then((response: unknown) => {
      console.log(`Task retrieved with id: ${id}`, response)
      return response
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// get all tasks
export const getAllTasks = (): unknown => {
  db.allDocs({ include_docs: true, attachments: true }).then((results: unknown) => {
    console.log('All tasks:', results)
    return results
  })
  return
}

// delete task
export const deleteTask = (id: string): unknown => {
  db.get(id)
    .then((doc: GetMeta) => {
      return db.remove(doc)
    })
    .then((result: unknown) => {
      console.log(`Task deleted with id: ${id}`, result)
      // handle result
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}
