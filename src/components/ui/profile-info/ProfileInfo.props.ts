import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { UserDto } from '../../../shared/types/user.types'

export interface ProfileInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userData: UserDto | undefined
  isLoading: boolean
  isMyProfile?: boolean
}
