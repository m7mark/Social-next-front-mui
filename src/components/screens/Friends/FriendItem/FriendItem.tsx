import Image from 'next/image'
import styles from './FriendItem.module.scss'
import { FriendItemProps } from './FriendItem.props'

import clsx from 'clsx'
import { useRouter } from 'next/router'
import userPlaceholder from '../../../../shared/img/avatar.png'

export const FriendItem = ({
  user,
  isLoading,
  className,
  ...rest
}: FriendItemProps) => {
  const { push } = useRouter()
  return (
    <div className={clsx(styles.friendItem, className)} {...rest}>
      <Image
        onClick={() => push(`/friend/${user._id}`)}
        src={user.profile.photo ?? userPlaceholder}
        width={80}
        height={80}
        alt="user-photo"
        style={{ borderRadius: '50%' }}
        priority
      />
      <div>
        <div className={styles.name}>{user.name}</div>
        <div className={styles.status}>{user.profile.status}</div>
      </div>
    </div>
  )
}
