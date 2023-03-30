import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { UserDto } from '../../../../shared/types/user.types'

export interface FriendItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: UserDto
  isLoading: boolean
}

export interface FriendItemSkeletonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
