import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { MeDto } from '../../../shared/types/user.types'

export interface ProfileInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  userData: MeDto | undefined
  isLoading: boolean
  isMyProfile?: boolean
}
