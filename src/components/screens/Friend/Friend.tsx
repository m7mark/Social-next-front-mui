import { UserDto } from '../../../shared/types/user.types'
import { ProfileHeader, ProfileInfo } from '../../ui'

interface IFriend {
  userData: UserDto
}

export const Friend = ({ userData }: IFriend) => {
  const isLoading = false
  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading} />
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
