import { ProfileHeader, ProfileInfo } from '../../ui'
import { FollowButton } from './FriendHeader/FollowButton'
import { useFriend } from './useFriend'

export const Friend = () => {
  const { userData, isLoading } = useFriend()
  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading}>
        <FollowButton />
      </ProfileHeader>
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
