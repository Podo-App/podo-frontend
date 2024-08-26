type Priority = 'Low' | 'Medium' | 'High'

interface SubTask {
  name: string
  isCompleted: boolean
}

export interface Task {
  name: string
  _id: string
  description: string
  dueDate: Date | string | number
  priority: Priority
  projectId: string
  totalPomos: number
  completedPomos: number
  isActive: boolean
  isCompleted: boolean
  subTasks: SubTask[]
}
