import { Button, Typography } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import styles from './ProfileHeader.module.scss'
import { ProfileHeaderProps } from './ProfileHeader.props'

export const ProfileHeader = ({
  photo,
  name,
  status,
  ...rest
}: ProfileHeaderProps) => {
  return (
    <div className={clsx(styles.profileHeader, 'boxWhite')} {...rest}>
      <Image
        src={photo}
        alt="User photo"
        width={150}
        height={150}
        className={styles.img}
      />

      <div className={styles.infoBlock}>
        <Typography variant="h6">{name}</Typography>
        <div className={styles.status}>{status}</div>
      </div>

      <Button className={styles.button} variant="outlined">
        Edit Profile
      </Button>
    </div>
  )
}
