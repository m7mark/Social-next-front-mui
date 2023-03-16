export interface ILoginFormInput {
  email: string
  password: string
}

export interface IApiError {
  statusCode: number
  message: string
  error: string
}
