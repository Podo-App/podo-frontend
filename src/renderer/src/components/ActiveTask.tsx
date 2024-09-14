import React, { useState } from 'react'
import { RxPause } from 'react-icons/rx'
import { GiTomato } from 'react-icons/gi'
import { LuFolderTree } from 'react-icons/lu'

const subTasks = [
  { id: 1, name: 'Sub Task 1', isCompleted: true },
  { id: 2, name: 'Sub Task 2', isCompleted: false },
  { id: 3, name: 'Sub Task 3', isCompleted: true }
]

const ActiveTask: React.FC<unknown> = () => {
  const [showSubTasks, setShowSubTasks] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const toggleSubTasks = () => setShowSubTasks((prev: boolean) => !prev)
  return (
    <div className="mt-10">
      <div
        className={`w-full px-4 py-4 bg-blue flex justify-between items-center rounded-ss-lg rounded-se-lg ${!showSubTasks && 'rounded-es-lg rounded-ee-lg'}`}
      >
        <p className="text-gray-700 text-3xl">Active Task Name</p>
        <div className="flex items-center gap-8">
          <LuFolderTree className="cursor-pointer" size={'1.5rem'} onClick={toggleSubTasks} />
          <div className="flex gap-4">
            <div className="flex gap-2">
              <GiTomato className="fill-red" size={'1.5rem'} />
              <p className="text-lg">1</p>
            </div>
            <div className="flex gap-2">
              <GiTomato className="fill-green" size={'1.5rem'} />
              <p className="text-lg">3</p>
            </div>
          </div>
          <p className="text-3xl text-gray-700">{`25 : 00 : 00`}</p>

          <button className="button-primary inline-flex items-center">
            <RxPause className="font-medium" size={'1.25rem'} />
            <span>PAUSE</span>
          </button>
        </div>
      </div>
      {showSubTasks && (
        <div className="px-4 py-4 flex flex-col gap-2 rounded-es-lg rounded-ee-lg shadow-lg">
          {subTasks?.map((subTask) => (
            <div className="flex gap-2 items-center" key={subTask?.id}>
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer bg-blue checked:bg-blue"
                checked={subTask?.isCompleted}
              />
              <p className="text-lg"> {subTask?.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ActiveTask
