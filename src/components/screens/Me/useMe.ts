import { useQuery } from 'react-query'
import { useAuth } from '../../../hooks/useAuth'
import { AuthService } from '../../../services/auth/auth.service'

export const useMe = () => {
  const currentUser = useAuth()

  const { data, isLoading } = useQuery('me', () => AuthService.getMe(), {
    select: ({ data }) => data,
    enabled: !!currentUser,
  })
  const userData = data?._id === currentUser ? data : undefined

  return { userData, isLoading }
}
