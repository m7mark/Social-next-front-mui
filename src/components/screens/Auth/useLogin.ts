import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { getTestAuthDto } from '../../../config/api.config'
import { AuthService } from '../../../services/auth/auth.service'
import { IApiError, ILoginFormInput } from './auth.interface'

export const useLogin = () => {
  const [isServerError, setIsServerError] = useState(false)
  const [serverError, setServerError] = useState<string | undefined>(undefined)
  const { query, push } = useRouter()
  const { isLoading, mutate } = useMutation(
    'login',
    (data: ILoginFormInput) => AuthService.login(data.email, data.password),
    {
      onError(error: AxiosError<IApiError>) {
        setIsServerError(true)
        const message = error.response?.data.message
        setServerError(message ? message : 'Some server Error')
      },
      onSuccess() {
        const redirect = query.redirect ? String(query.redirect) : '/'
        push(redirect)
      },
    }
  )

  const onSubmit: SubmitHandler<ILoginFormInput> = (data) => mutate(data)

  const closeServerError = () => {
    setIsServerError(false)
  }
  const loginTestUser = () => mutate(getTestAuthDto())

  return {
    onSubmit,
    loginTestUser,
    isLoading,
    serverError,
    closeServerError,
    isServerError,
  }
}
