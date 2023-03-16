import { useQuery } from 'react-query'
import { useAuth } from '../../../hooks/useAuth'
import { AuthService } from '../../../services/auth/auth.service'

export const useMe = () => {
  const currentUser = useAuth()
  console.log('current-user', currentUser)
  const { data: userData, isLoading } = useQuery(
    'me',
    () => AuthService.getMe(),
    {
      select: ({ data }) => data,
      enabled: !!currentUser,
    }
  )

  return { userData, isLoading }
}
