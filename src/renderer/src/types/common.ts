import { HttpStatusCode } from 'axios'

export interface CreateDocSuccessResponse {
  ok: boolean
  id: string
  rev: string
}

export interface IdMeta {
  _id: string
}

export interface GetMeta {
  _id: string
  _rev: string
  _attachments?: unknown
  _conflicts?: string[]
  _deleted?: boolean
  _revisions?: {
    start: number
    ids: string[]
  }
}

export interface CustomPouchError {
  docId: string
  error: boolean
  message: string
  name: string
  reason: string
  stack: string
  status: HttpStatusCode
}

export interface ActiveTask extends GetMeta {
  taskId?: string
}
