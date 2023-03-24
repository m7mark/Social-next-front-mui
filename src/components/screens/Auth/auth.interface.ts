export interface ILoginFormInput {
  email: string
  password: string
}

export interface IAuthFormInput {
  name: string
  email: string
  password: string
}

export interface IApiError {
  statusCode: number
  message: string
  error: string
}
