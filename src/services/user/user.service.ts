import instance from '../../api/interceptors'
import { getUserUrl } from '../../config/api.config'
import { UsersDto } from '../../shared/types/user.types'

export interface GetUsersProps {
  term?: string
  limit?: number
  page?: number
  isFriends?: boolean
}

export const UserService = {
  async getUsers({ term, limit, page, isFriends }: GetUsersProps) {
    const a = page ? `page=${page}` : ''
    const b = isFriends ? `&friend=${isFriends}` : ''
    const c = term ? `&term=${term}` : ''
    const d = limit ? `&limit=${limit}` : ''
    const query = a + b + c + d

    const response = await instance.get<UsersDto>(
      getUserUrl(`/get-users/?${query}`)
    )
    return response
  },
}
