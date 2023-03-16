import axios, { axiosBase } from '../../api/interceptors'
import { getAuthUrl } from '../../config/api.config'
import { AuthDto } from '../../shared/types/auth.types'
import { MeDto } from '../../shared/types/user.types'
import { removeFromStorage, saveToStorage } from './auth.helper'

export const AuthService = {
  async login(email: string, password: string) {
    const response = await axiosBase.post<Omit<AuthDto, 'name'>>(
      getAuthUrl('/login'),
      {
        email,
        password,
      }
    )
    if (response.data.access_token) {
      saveToStorage(response.data.access_token, response.data._id)
    }
    return response
  },
  async register(email: string, name: string, password: string) {
    const response = await axiosBase.post<AuthDto>(getAuthUrl('/register'), {
      email,
      name,
      password,
    })
    if (response.data.access_token) {
      saveToStorage(response.data.access_token, response.data._id)
    }
    return response
  },

  logout() {
    removeFromStorage()
  },

  async getMe() {
    const response = await axios.get<MeDto>(getAuthUrl('/me'))
    return response
  },
}
