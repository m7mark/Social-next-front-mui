import { Skeleton, Typography } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import slider from '../../../shared/img/slider2.png'
import styles from './ProfileInfo.module.scss'
import { ProfileInfoProps } from './ProfileInfo.props'

export const ProfileInfo = ({
  userData,
  isLoading,
  ...rest
}: ProfileInfoProps) => {
  const isSkeleton = isLoading || !userData

  return (
    <div className="twoColumn">
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
      <div className={clsx(styles.sidebar, 'boxWhite')}>
        <Image src={slider} alt="slider image" width={285} height={285} />
      </div>
    </div>
  )
}
