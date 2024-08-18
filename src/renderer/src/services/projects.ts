import { CreateDocSuccessResponse } from '@renderer/types/common'
import { CreateProjectReqest } from '@renderer/types/project'
import PouchDB from 'pouchdb'

const db = new PouchDB('podo_projects')

// create a new project
export const createProject = (data: CreateProjectReqest): unknown => {
  db.put(data)
    .then((response: CreateDocSuccessResponse) => {
      console.log(`Project created with id: ${response.id}`)
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// get project by id
export const getProjectById = (id: string): unknown => {
  db.get(id)
    .then((response: unknown) => {
      return response
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// get all projects
export const getAllProjects = (): unknown => {
  db.allDocs({ include_docs: true, attachments: true }).then((results: unknown) => {
    return results
  })
  return
}
