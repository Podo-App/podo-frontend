import { GetMeta, IdMeta } from './common'

export interface CreateProjectReqest extends IdMeta {
  name: string
}

export interface ProjectResponse extends GetMeta {
  name: string
}
