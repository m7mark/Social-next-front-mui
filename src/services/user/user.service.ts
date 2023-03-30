import instance, { axiosBase } from '../../api/interceptors'
import { getUserUrl } from '../../config/api.config'
import { IProfileUpdateProps, IUsersProps } from '../../shared/types/api.types'
import {
  FollowUserResponseDto,
  UserDto,
  UsersDto,
} from '../../shared/types/user.types'

export const UserService = {
  async getUsers({ term, limit, page, isFriends }: IUsersProps) {
    const a = page ? `page=${page}` : ''
    const b = isFriends ? `&friend=${isFriends}` : ''
    const c = term ? `&term=${term}` : ''
    const d = limit ? `&limit=${limit}` : ''
    const query = a + b + c + d

    const { data } = await instance.get<UsersDto>(
      getUserUrl(`/get-users/?${query}`)
    )
    return data
  },

  async getById(id: string) {
    const { data } = await axiosBase.get<UserDto>(getUserUrl(`/profile/${id}`))
    return data
  },

  async updateProfile(profile: IProfileUpdateProps) {
    const response = await instance.patch<UserDto>(getUserUrl('/profile'), {
      ...profile,
      homeUrl: profile.homeUrl ? profile.homeUrl : null,
    })
    return response
  },

  async follow(id: string) {
    const { data } = await instance.post<FollowUserResponseDto>(
      getUserUrl(`/follow/${id}`)
    )
    return data
  },

  async unfollow(id: string) {
    const { data } = await instance.delete<FollowUserResponseDto>(
      getUserUrl(`/follow/${id}`)
    )
    return data
  },

  async uploadPhoto(formData: FormData) {
    const response = await instance.post<UserDto>(
      getUserUrl('/photo'),
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )
    return response
  },
}
