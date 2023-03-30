import { useMe } from '../../../hooks/useMe'
import { ProfileHeader, ProfileInfo } from '../../ui'
import { EditButton } from './EditButton/EditButton'

export const Me = () => {
  const { meData: userData, isLoading } = useMe()

  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading}>
        <EditButton />
      </ProfileHeader>
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
