import { ProfileHeader, ProfileInfo } from '../../ui'
import styles from './Me.module.scss'
import { useMe } from './useMe'

export const Me = () => {
  const { userData, isLoading } = useMe()

  if (isLoading || !userData) return null

  return (
    <div className={styles.me}>
      <ProfileHeader
        photo={userData.profile.photo}
        name={userData.name}
        status={userData?.profile.status}
      />
      <ProfileInfo
        lookingJob={userData.profile.lookingForAJob}
        aboutMe={userData.profile.aboutMe}
        url={userData.profile.homeUrl}
        description={userData.profile.lookingForAJobDescription}
      />
    </div>
  )
}
