import styles from './FriendItem.module.scss'

import { Skeleton } from '@mui/material'
import clsx from 'clsx'
import { FriendItemSkeletonProps } from './FriendItem.props'

export const FriendItemSkeleton = ({
  className,
  ...rest
}: FriendItemSkeletonProps) => {
  return (
    <div className={clsx(styles.friendItem, className)} {...rest}>
      <Skeleton variant="circular" width={80} height={80} />
      <div>
        <Skeleton />
        <Skeleton />
      </div>
    </div>
  )
}
