import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMutation } from 'react-query'
import { AuthService } from '../../../../services/auth/auth.service'
import { IApiError, IAuthProps } from '../../../../shared/types/api.types'

export const useRegister = () => {
  const [isServerError, setIsServerError] = useState(false)
  const [serverError, setServerError] = useState<string | undefined>(undefined)
  const { query, push } = useRouter()
  const { isLoading, mutate } = useMutation(
    'register',
    (data: IAuthProps) =>
      AuthService.register(data.name, data.email, data.password),
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

  const onSubmit: SubmitHandler<IAuthProps> = (data) => mutate(data)

  const closeServerError = () => {
    setIsServerError(false)
  }

  return {
    onSubmit,
    isLoading,
    serverError,
    closeServerError,
    isServerError,
  }
}
