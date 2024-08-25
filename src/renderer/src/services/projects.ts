import { CreateDocSuccessResponse, GetMeta } from '@renderer/types/common'
import { CreateProjectRequest, Project } from '@renderer/types/project'
import PouchDB from 'pouchdb'

const db = new PouchDB('podo_projects')

// create a new project
export const createProject = (data: CreateProjectRequest): unknown => {
  db.put(data)
    .then((response: CreateDocSuccessResponse) => {
      console.log(`Project created with id: ${response.id}`)
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}

// update project
export const updateProject = (data: Project): unknown => {
  db.put(data)
    .then((response: CreateDocSuccessResponse) => {
      console.log(`Project updated with id: ${response.id}`, response)
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
      console.log(`Project retrieved with id: ${id}`, response)
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
    console.log('All projects:', results)
    return results
  })
  return
}

// delete project
export const deleteProject = (id: string): unknown => {
  db.get(id)
    .then((doc: GetMeta) => {
      return db.remove(doc)
    })
    .then((result: unknown) => {
      console.log(`Project deleted with id: ${id}`, result)
      // handle result
    })
    .catch(function (err) {
      console.log(err)
    })
  return
}
