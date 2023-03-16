import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL } from '../config/api.config'
import { getContentType } from './api.helpers'

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
})

const instance = axios.create({ baseURL: API_URL, headers: getContentType() })

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

export default instance

// instance.interceptors.response.use((config) => config, async (error) => {
//   throw error
// })
