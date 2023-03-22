export const API_URL = `${process.env.NEXT_PUBLIC_APP_API_URL}/api`

export const getAuthUrl = (s: string) => `/auth${s}`
export const getUserUrl = (s: string) => `/user${s}`

export const getTestAuthDto = () => ({
  email: 'test@test.ru',
  password: 'testtest',
})
