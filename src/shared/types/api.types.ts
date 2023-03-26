import { File } from 'buffer'
import { ProfileDto } from './user.types'

export interface IApiError {
  statusCode: number
  message: string
  error: string
}
export interface IAuthProps {
  name: string
  email: string
  password: string
}

export type IUsersProps = Partial<{
  term: string
  limit: number
  page: number
  isFriends: boolean
}>

export type IProfileUpdateProps = Partial<
  Omit<ProfileDto, 'photo'> & { file: File }
>
