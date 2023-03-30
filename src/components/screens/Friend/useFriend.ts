import { useMutation, useQuery } from '@tanstack/react-query'
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

  const { mutate: follow } = useMutation(['follow', userId], (userId: string) =>
    UserService.follow(userId)
  )

  const { mutate: unfollow } = useMutation(
    ['unfollow', userId],
    (userId: string) => UserService.unfollow(userId)
  )

  function beFriend(type: 'follow' | 'unfollow', id: string) {
    if (type === 'follow') follow(id)
    else unfollow(id)
  }

  return {
    userData,
    isLoading,
    beFriend,
  }
}
