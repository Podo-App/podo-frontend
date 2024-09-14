/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { IoGridOutline, IoListOutline } from 'react-icons/io5'

import Project from './Project'

type View = 'list' | 'grid'

const projectsData = [
  {
    name: 'Project One'
  },
  {
    name: 'Project Two'
  },
  {
    name: 'Project Three'
  },
  {
    name: 'Project Four'
  }
]

const Projects: React.FC<unknown> = () => {
  const [view, setView] = useState<View>('list')
  const toggleView = (selectedView: View) => setView(selectedView)
  return (
    <div className="mt-10">
      <div className="flex flex-row justify-end">
        <div className="w-max flex flex-row shadow-lg bg-white rounded-lg">
          <div className={`cursor-pointer rounded-lg p-2 ${view === 'grid' ? 'bg-blue' : ''}`}>
            <IoGridOutline size={'2rem'} onClick={() => toggleView('grid')} />
          </div>
          <div className={`cursor-pointer rounded-lg p-2 ${view === 'list' ? 'bg-blue' : ''}`}>
            <IoListOutline size={'2rem'} onClick={() => toggleView('list')} />
          </div>
        </div>
      </div>
      <div className={`grid gap-10 mt-4 ${view === 'list' ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {projectsData?.map((project: any) => (
          <Project project={project} key={project?.name} view={view} />
        ))}
      </div>
    </div>
  )
}

export default Projects
