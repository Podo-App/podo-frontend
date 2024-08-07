export interface CommonGetRequest {
  // TODO: define common request type
  page: number
  pageSize: number
  containsText: string
}

export interface CommonPostResponse {
  success: boolean // TODO: define common response
}

export interface Project {
  // TODO: define project type
  id?: string
  name: string
}

export interface ProjectResponse {
  // TODO: define project get api response type
  projects: Project[]
  totalCount: number
  pageCount: number
  pageSize: number
  page: number
}
