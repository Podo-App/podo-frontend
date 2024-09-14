/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'
import Task from './Task'

interface ProjectType {
  name: string
}

interface ProjectProps {
  project: ProjectType
  view: string
}

const projectTasks = [
  {
    name: 'Task One',
    isCompleted: true,
    description: 'Task one description',
    dueDate: '10-10-2024',
    priority: 'Low',
    subTasks: [
      { name: 'Sub Task 1', isCompleted: true },
      { name: 'Sub Task 2', isCompleted: false },
      { name: 'Sub Task 3', isCompleted: true }
    ]
  },
  {
    name: 'Task Two',
    isCompleted: true,
    description: 'Task two description',
    dueDate: '10-10-2024',
    priority: 'Low',
    subTasks: [
      { name: 'Sub Task 1', isCompleted: true },
      { name: 'Sub Task 2', isCompleted: false },
      { name: 'Sub Task 3', isCompleted: true }
    ]
  },
  {
    name: 'Task Three',
    isCompleted: false,
    description: 'Task three description',
    dueDate: '10-10-2024',
    priority: 'Low',
    subTasks: [
      { name: 'Sub Task 1', isCompleted: true },
      { name: 'Sub Task 2', isCompleted: false },
      { name: 'Sub Task 3', isCompleted: true }
    ]
  }
]

const Project: React.FC<unknown> = (props: ProjectProps) => {
  const { project, view } = props
  const [expand, setExpand] = useState<boolean>(false)
  const toggleTasks = () => setExpand((prev: boolean) => !prev)

  return (
    <div className="">
      <div
        className={`bg-blue p-4 flex flex-row justify-between items-cente rounded-ss-lg rounded-se-lg ${!expand && view === 'list' && 'rounded-es-lg rounded-ee-lg'}`}
      >
        <p className="text-lg">{project?.name}</p>
        {view === 'list' && (
          <>
            {expand ? (
              <IoChevronUp className="cursor-pointer" size={'1.5rem'} onClick={toggleTasks} />
            ) : (
              <IoChevronDown className="cursor-pointer" size={'1.5rem'} onClick={toggleTasks} />
            )}
          </>
        )}
      </div>
      {(expand || view === 'grid') && (
        <div
          className={`flex flex-col gap-4 p-4 rounded-es-lg rounded-ee-lg shadow-lg ${view === 'grid' ? 'max-h-[50vh] overflow-y-scroll no-scrollbar' : ''}`}
        >
          {projectTasks?.map((task: any, index: number) => (
            <div key={task?.name}>
              <Task task={task} />
              {index <= projectTasks?.length - 2 && (
                <hr className="h-px mt-4 bg-gray-light border-0 " />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Project
