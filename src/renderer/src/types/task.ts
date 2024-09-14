export type Priority = 'Low' | 'Medium' | 'High' | undefined

export interface SubTask {
  name: string
  isCompleted: boolean
}

export interface CreateTaskRequest {
  name: string
  _id: string
  description?: string
  dueDate?: Date | string | number
  priority?: Priority
  projectId?: string
  totalPomos?: number
  isCompleted?: boolean
  subTasks?: SubTask[]
}

export interface UpdateTaskRequest extends CreateTaskRequest {
  _rev: string
}
