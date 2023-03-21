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
    const query = `${page ? `page=${page}` : ''}${
      limit ? `&limit=${limit}` : ''
    }${term ? `&term=${term}` : ''}${isFriends ? `&friend=${isFriends}` : ''}`

    console.log(query)
    const response = await instance.get<UsersDto>(
      getUserUrl(`/get-users/?${query}`)
    )
    return response
  },
}
