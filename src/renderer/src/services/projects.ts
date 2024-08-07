import { BASE_URL } from '@renderer/constants'
import { request } from './network'
import { CommonGetRequest, CommonPostResponse, Project, ProjectResponse } from '@renderer/types'

export const getProjects = (data: CommonGetRequest): Promise<ProjectResponse> =>
  request({
    url: `${BASE_URL}/projects`,
    method: 'GET',
    data
  })

export const createProject = (data: Project): Promise<CommonPostResponse> =>
  request({
    url: `${BASE_URL}/projects`,
    method: 'POST',
    data
  })
