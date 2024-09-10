import React from 'react'
import { BsFlag } from 'react-icons/bs'
import { IoCalendarClearOutline } from 'react-icons/io5'
import { TfiTime } from 'react-icons/tfi'
import { BiTask } from 'react-icons/bi'
import { FiFolder } from 'react-icons/fi'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Task } from '@renderer/types/task'

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
  const { register, handleSubmit, watch } = useForm<Task>()
  const [dueDate] = watch(['dueDate'])

  const onSubmit: SubmitHandler<Task> = (data) => console.log('form values', data)

  return (
    <form className="w-full rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="w-full px-4 py-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 bg-blue text-3xl font-sans rounded-ss-lg rounded-se-lg"
        type="text"
        placeholder="Task Name.."
        defaultValue=""
        {...register('name')}
      />
      <input
        className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 text-xl font-sans"
        type="text"
        placeholder="Description..."
        defaultValue=""
        {...register('description')}
      />

      <div className="px-4 pt-2 py-3 w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 relative">
            <IoCalendarClearOutline size={'1.25rem'} className="cursor-pointer" />
            <p>{`${dueDate ?? 'Due Date'}`}</p>
            <input
              type="date"
              className="absolute left-0 opacity-0 w-[20px]" // hides date input
              {...register('dueDate')}
            />
          </div>
          <div className="flex items-center gap-1 relative">
            <BsFlag size={'1.25rem'} className="cursor-pointer" />
            <select name="priority" ref={register('priority')}>
              <option value=""></option>
              <option value="5">Function 2</option>
              <option value="6">Function 3</option>
            </select>
          </div>
          {taskSubDetails.map((item) => (
            <div className="flex items-center gap-1 cursor-pointer" key={item.id}>
              {item.icon}
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="button-secondary">Cancel</button>
          <button className="button-primary" type="submit">
            Add task
          </button>
        </div>
      </div>
    </form>
  )
}

export default TaskInput
