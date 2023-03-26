import { Button, Skeleton, Typography } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import styles from './ProfileHeader.module.scss'
import { ProfileHeaderProps } from './ProfileHeader.props'
// import userPlaceholder from './user-placeholder.png'
import { useRouter } from 'next/router'
import userPlaceholder from '../../../shared/img/avatar.png'

export const ProfileHeader = ({
  userData,
  isLoading,
  ...rest
}: ProfileHeaderProps) => {
  const { push } = useRouter()
  const isSkeleton = isLoading || !userData

  return (
    <div className={clsx(styles.profileHeader, 'boxWhite')} {...rest}>
      {isSkeleton ? (
        <>
          <Skeleton variant="circular" width={150} height={150} />
          <div className={styles.infoBlock} style={{ maxWidth: '280px' }}>
            <Skeleton height={40} />
            <Skeleton />
          </div>
          <Skeleton variant="rounded" width={116} height={35} />
        </>
      ) : (
        <>
          <Image
            src={userData.profile.photo ?? userPlaceholder}
            alt="User photo"
            width={150}
            height={150}
            className={styles.img}
            priority
          />
          <div className={styles.infoBlock}>
            <Typography variant="h6">{userData.name}</Typography>
            <Typography
              variant="body2"
              sx={{ textTransform: 'uppercase', fontSize: 13 }}
            >
              {userData.profile.status ?? 'Empty status'}
            </Typography>
          </div>
          <Button
            className={styles.button}
            variant="outlined"
            onClick={() => push('/me/edit')}
          >
            Edit Profile
          </Button>
        </>
      )}
    </div>
  )
}
