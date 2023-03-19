import { ProfileHeader, ProfileInfo } from '../../ui'
import styles from './Me.module.scss'
import { useMe } from './useMe'

export const Me = () => {
  const { userData, isLoading } = useMe()

  return (
    <div className={styles.me}>
      <ProfileHeader userData={userData} isLoading={isLoading} />
      <ProfileInfo userData={userData} isLoading={isLoading} />
    </div>
  )
}
