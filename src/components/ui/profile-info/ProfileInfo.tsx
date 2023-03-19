import { Skeleton, Typography } from '@mui/material'
import clsx from 'clsx'
import styles from './ProfileInfo.module.scss'
import { ProfileInfoProps } from './ProfileInfo.props'

export const ProfileInfo = ({
  userData,
  isLoading,
  ...rest
}: ProfileInfoProps) => {
  const isSkeleton = isLoading || !userData

  return (
    <div className={clsx(styles.profileInfo, 'boxWhite')} {...rest}>
      {isSkeleton ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        <div className={styles.infoBlock}>
          <Typography variant="body1">
            <b>About me:</b>&nbsp;
            {userData.profile.aboutMe}
          </Typography>
          <div>
            <b>Home url:</b>&nbsp;
            {userData.profile.homeUrl}
          </div>
          <div>
            <b>Looking for work:</b>&nbsp;
            {userData.profile.lookingForAJob ? '✅️' : '❌'}
          </div>
          <div>
            <b>Work description:</b>&nbsp;
            {userData.profile.lookingForAJobDescription}
          </div>
        </div>
      )}
    </div>
  )
}
