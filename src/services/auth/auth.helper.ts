import Cookies from 'js-cookie'

const saveTokenStorage = (accessToken: string) => {
  Cookies.set('accessToken', accessToken)
}
const removeTokenStorage = () => {
  Cookies.remove('accessToken')
}

export const saveToStorage = (token: string, id: string) => {
  saveTokenStorage(token)
  localStorage.setItem('user', JSON.stringify(id))
}

export const removeFromStorage = () => {
  removeTokenStorage()
  localStorage.removeItem('user')
}
