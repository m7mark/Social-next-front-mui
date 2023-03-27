import { UserDto } from '../../../shared/types/user.types'
import { ProfileHeader, ProfileInfo } from '../../ui'
import { useFriend } from './useFriend'

interface IFriend {
  userData: UserDto
}

export const Friend = () => {
  const { userData, isLoading, isError } = useFriend()
  console.log(userData, isLoading, isError)
  return (
    <div>
      <ProfileHeader userData={userData} isLoading={isLoading} />
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
