import { useQuery } from 'react-query'
import { useAuth } from '../../../hooks/useAuth'
import { AuthService } from '../../../services/auth/auth.service'

export const useMe = () => {
  const currentUser = useAuth()

  const { data, isLoading, refetch, isFetching } = useQuery(
    'me',
    () => AuthService.getMe(),
    {
      select: ({ data }) => data,
      enabled: !!currentUser,
    }
  )
  const userData = data?._id === currentUser ? data : undefined
  console.log(isFetching)

  return { userData, isLoading, isFetching, refetch }
}
