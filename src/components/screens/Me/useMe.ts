import { useQuery } from 'react-query'
import { useAuth } from '../../../hooks/useAuth'
import { AuthService } from '../../../services/auth/auth.service'

export const useMe = () => {
  const currentUser = useAuth()
  // console.log('current-user', currentUser)
  const { data, isLoading, status } = useQuery(
    'me',
    () => AuthService.getMe(),
    {
      select: ({ data }) => data,
      enabled: !!currentUser,
    }
  )
  const userData = data?._id === currentUser ? data : undefined
  console.log(status)

  return { userData, isLoading }
}
