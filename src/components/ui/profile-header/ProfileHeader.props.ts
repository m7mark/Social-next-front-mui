import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { UserDto } from '../../../shared/types/user.types'

export interface ProfileHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userData: UserDto | undefined
  isLoading: boolean
  children: ReactNode
}
