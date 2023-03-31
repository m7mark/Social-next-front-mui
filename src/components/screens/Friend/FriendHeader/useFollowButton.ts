import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMe } from '../../../../hooks/useMe'
import { UserService } from '../../../../services/user/user.service'

export const useFollowButton = () => {
  const { query } = useRouter()
  const { meData, refetch } = useMe()

  const userId = typeof query?.id === 'string' ? query.id : ''

  const [isFollowed, setIsFollowed] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (meData) setIsFollowed(meData.followedIds.includes(userId))
  }, [meData, userId])

  const { mutate: follow, isLoading: isLoadingFollow } = useMutation(
    ['follow', userId],
    (userId: string) => UserService.follow(userId),
    { onSuccess: async () => await refetch() }
  )

  const { mutate: unfollow, isLoading: isLoadingUnfollow } = useMutation(
    ['unfollow', userId],
    (userId: string) => UserService.unfollow(userId),
    { onSuccess: async () => await refetch() }
  )

  const handleFollow = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) return
    if (e.target.textContent === 'Follow') {
      follow(userId)
      setIsFollowed(true)
    } else {
      unfollow(userId)
      setIsFollowed(false)
    }
  }

  return {
    isFollowed,
    isLoading: isLoadingFollow || isLoadingUnfollow || isFollowed === undefined,
    handleFollow,
  }
}
