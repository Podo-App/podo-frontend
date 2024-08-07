/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE_URL } from '@renderer/constants'
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const client = axios.create({
  baseURL: BASE_URL
})

// Define types for the request options
interface RequestOptions extends AxiosRequestConfig {}

// Define types for the response data
interface ResponseData<T = any> {
  data: T
}

// Define types for the error response
interface ErrorResponse {
  message: string
  [key: string]: any
}

// Define types for the user state
interface UserState {
  accessToken?: string
}

// Define types for the global state
interface GlobalState {
  user?: {
    currentUser?: UserState
  }
}

export const request = async (options: RequestOptions): Promise<any> => {
  let token: string | undefined
  const state: GlobalState = { user: { currentUser: { accessToken: 'abcdefghigjkl' } } } // TODO: need to implement authentication
  const userState: UserState | undefined = state?.user?.currentUser

  if (!userState) {
    token = ''
  } else {
    const { accessToken } = userState
    token = accessToken
  }

  // Set the authorization header
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  const onSuccess = (response: AxiosResponse<ResponseData>): any => {
    return response?.data?.data
  }

  const onError = (error: AxiosError<ErrorResponse>): Promise<never> => {
    return Promise.reject(error.response?.data)
  }

  return client(options).then(onSuccess).catch(onError)
}
