import { Typography } from '@mui/material'
import clsx from 'clsx'
import styles from './ProfileInfo.module.scss'
import { ProfileInfoProps } from './ProfileInfo.props'

export const ProfileInfo = ({
  aboutMe,
  url,
  description,
  lookingJob,
  ...rest
}: ProfileInfoProps) => {
  return (
    <div className={clsx(styles.profileInfo, 'boxWhite')} {...rest}>
      <div className={styles.infoBlock}>
        <Typography variant="body1">
          <b>About me:</b>&nbsp;
          {aboutMe}
        </Typography>
        <div>
          <b>Home url:</b>&nbsp;
          {url}
        </div>
        <div>
          <b>Looking for work:</b>&nbsp;{lookingJob ? '✅️' : '❌'}
        </div>
        <div>
          <b>Work description:</b>&nbsp;{description}
        </div>
      </div>
    </div>
  )
}
