import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { UserService } from '../../../services/user/user.service'

export const useFriend = () => {
  const { query } = useRouter()
  const userId = typeof query?.id === 'string' ? query.id : ''

  const { data: userData, isLoading } = useQuery(
    ['getUserStaticProps', userId],
    () => UserService.getById(String(userId)),
    {
      enabled: userId.length > 0,
      staleTime: Infinity,
    }
  )

  return {
    userData,
    isLoading,
  }
}
