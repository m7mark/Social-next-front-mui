import { useQuery } from '@tanstack/react-query'
import { AuthService } from '../services/auth/auth.service'
import { useAuth } from './useAuth'

export const useMe = () => {
  const currentUser = useAuth()

  const { data, isLoading, refetch, isFetching } = useQuery(
    ['me'],
    () => AuthService.getMe(),
    {
      enabled: !!currentUser,
    }
  )
  const meData = data?._id === currentUser ? data : undefined

  return { meData, isLoading, isFetching, refetch }
}
