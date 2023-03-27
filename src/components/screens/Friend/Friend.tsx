import { ProfileHeader, ProfileInfo } from '../../ui'
import { useFriend } from './useFriend'

export const Friend = () => {
  const { userData, isLoading } = useFriend()
  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading} />
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
