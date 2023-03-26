import { ProfileHeader, ProfileInfo } from '../../ui'
import { useMe } from './useMe'

export const Me = () => {
  const { userData, isLoading } = useMe()

  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading} isMyProfile />
      <ProfileInfo userData={userData} isLoading={isLoading} isMyProfile />
    </div>
  )
}
