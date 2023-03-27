import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { UserService } from '../../../services/user/user.service'

export const useFriend = () => {
  const { query } = useRouter()
  const userId = typeof query?.id === 'string' ? query.id : ''

  const {
    data: userData,
    isLoading,
    isError,
  } = useQuery(['getUser', userId], () => UserService.getById(String(userId)), {
    enabled: userId.length > 0,
    staleTime: Infinity,
    select: ({ data }) => data,
  })

  return {
    userData,
    isLoading,
    isError,
  }
}
