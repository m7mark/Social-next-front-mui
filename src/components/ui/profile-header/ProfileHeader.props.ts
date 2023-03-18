import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ProfileHeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  photo: string
  name: string
  status: string
  isMyProfile?: boolean
}
