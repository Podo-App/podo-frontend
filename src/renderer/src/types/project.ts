import { GetMeta } from './common'

export interface CreateProjectRequest {
  name: string
  _id: string
}

export interface Project {
  name: string
  _id: string
  _rev: string
}

export interface ProjectResponse extends GetMeta {
  name: string
}
