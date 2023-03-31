import Image from 'next/image'
import styles from './FriendItem.module.scss'
import { FriendItemProps } from './FriendItem.props'

import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useAuth } from '../../../../hooks/useAuth'
import userPlaceholder from '../../../../shared/img/avatar.png'

export const FriendItem = ({
  user,
  isLoading,
  className,
  ...rest
}: FriendItemProps) => {
  const { push } = useRouter()
  const currentUser = useAuth()
  const pushUrl = currentUser === user._id ? `/me` : `/friend/${user._id}`

  return (
    <div className={clsx(styles.friendItem, className)} {...rest}>
      <Image
        className={styles.img}
        onClick={() => push(pushUrl)}
        src={user.profile.photo ?? userPlaceholder}
        width={80}
        height={80}
        alt="user-photo"
        priority
      />
      <div>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.status}>{user.profile.status}</div>
      </div>
    </div>
  )
}
