import { ProfileHeader, ProfileInfo } from '../../ui'
import { useMe } from './useMe'

export const Me = () => {
  const { userData, isLoading: isFirstLoading, isFetching } = useMe()
  const isLoading = isFirstLoading

  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading} />
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
