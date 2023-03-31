import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useMe } from '../../../../hooks/useMe'
import { UserService } from '../../../../services/user/user.service'
import {
  IApiError,
  IProfileUpdateProps,
} from '../../../../shared/types/api.types'

export const useEditProfile = () => {
  const [isServerError, setIsServerError] = useState(false)
  const [serverError, setServerError] = useState<string | undefined>(undefined)
  const { query, push } = useRouter()
  const { refetch } = useMe()

  const { isLoading, mutate: updateProfile } = useMutation(
    ['editProfile'],
    (data: IProfileUpdateProps) => UserService.updateProfile(data),
    {
      onError: (error: AxiosError<IApiError>) => {
        setIsServerError(true)
        const message = error.response?.data.message
        setServerError(message ? message : 'Some server Error')
      },
      onSuccess: async () => {
        await refetch()
        const redirect = query.redirect ? String(query.redirect) : '/me'
        push(redirect)
      },
    }
  )

  const { isLoading: isLoadingUpdatedImg, mutate: updatePhoto } = useMutation(
    ['editPhoto'],
    (formData: FormData) => UserService.uploadPhoto(formData),
    {
      onError: (error: AxiosError<IApiError>) => {
        setIsServerError(true)
        const message = error.response?.data.message
        setServerError(message ? message : 'Some server Error')
      },
      onSuccess: async () => await refetch(),
    }
  )

  const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLElement)) return
    if (!e.target.files) return
    const image = e.target.files[0]
    let formData = new FormData()
    formData.append('image', image)
    updatePhoto(formData)
  }

  const onSubmit: SubmitHandler<IProfileUpdateProps> = (data) =>
    updateProfile(data)

  const closeServerError = () => {
    setIsServerError(false)
  }

  return {
    onSubmit,
    isLoading,
    isLoadingUpdatedImg,
    isServerError,
    serverError,
    closeServerError,
    uploadPhoto,
  }
}
