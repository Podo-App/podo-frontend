import React from 'react'
import { BsFlag } from 'react-icons/bs'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { TfiTime } from 'react-icons/tfi'
import { BiTask } from 'react-icons/bi'
import { FiFolder } from 'react-icons/fi'

const taskSubDetails = [
  {
    id: 1,
    name: 'Due date',
    icon: <IoCalendarClearOutline size={'1.25rem'} />
  },
  {
    id: 2,
    name: 'Priority',
    icon: <BsFlag size={'1.25rem'} />
  },
  {
    id: 3,
    name: 'Project',
    icon: <FiFolder size={'1.25rem'} />
  },
  {
    id: 4,
    name: 'Subtask',
    icon: <BiTask size={'1.25rem'} />
  },
  {
    id: 5,
    name: '00',
    icon: <TfiTime size={'1.25rem'} />
  }
]

const TaskInput: React.FC<unknown> = () => {
  return (
    <div className="w-full rounded-lg shadow-lg">
      <input
        className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 bg-blue text-3xl font-sans rounded-ss-lg rounded-se-lg"
        type="text"
        placeholder="Task Name.."
      />
      <input
        className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 text-xl font-sans"
        type="text"
        placeholder="Description..."
      />

      <div className="px-4 pt-2 py-3 w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          {taskSubDetails.map((item) => (
            <div className="flex items-center gap-1 cursor-pointer" key={item.id}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="button-secondary">Cancel</button>
          <button className="button-primary">Add task</button>
        </div>
      </div>
    </div>
  )
}

export default TaskInput
