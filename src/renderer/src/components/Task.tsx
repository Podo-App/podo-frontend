/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Priority, SubTask } from '@renderer/types/task'
import React, { useState } from 'react'
import { BsFlag } from 'react-icons/bs'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { LuFolderTree } from 'react-icons/lu'
import { RxPlay } from 'react-icons/rx'

interface TaskType {
  name: string
  isCompleted: boolean
  description: string
  dueDate?: string | number | undefined
  priority?: Priority
  subTasks?: SubTask[]
}

interface TaskProps {
  task: TaskType
}

const Task: React.FC<unknown> = (props: TaskProps) => {
  const { task } = props
  const [showSubTasks, setShowSubTasks] = useState<boolean>(false)

  const toggleSubTasks = () => setShowSubTasks((prev: boolean) => !prev)

  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 cursor-pointer bg-blue checked:bg-blue mr-2"
          checked={task?.isCompleted}
        />
        <p className="text-lg"> {task?.name}</p>
      </div>
      <div className="pl-6 flex flex-col gap-2">
        <p className="text-sm">{task?.description}</p>
        {showSubTasks && (
          <div className="px-4 py-4 flex flex-col gap-2">
            {task?.subTasks?.map((subTask) => (
              <div className="flex gap-2 items-center" key={subTask?.name}>
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer bg-blue checked:bg-blue"
                  checked={subTask?.isCompleted}
                />
                <p className="text-sm"> {subTask?.name}</p>
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <IoCalendarClearOutline size={'1rem'} />
              <p className="text-sm">{task?.dueDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <BsFlag size={'1rem'} />
              <p className="text-sm">{task?.priority}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <LuFolderTree className="cursor-pointer" size={'1rem'} onClick={toggleSubTasks} />
            </div>
          </div>
          <button className="button-primary py-1 px-2 text-xs inline-flex items-center gap-2">
            <RxPlay size={'0.75rem'} />
            <span>START</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Task
