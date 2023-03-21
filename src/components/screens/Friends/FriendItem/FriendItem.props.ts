import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { User } from '../../../../shared/types/user.types'

export interface FriendItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: User
  isLoading: boolean
}

export interface FriendItemSkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
