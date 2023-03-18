import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ProfileInfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  aboutMe: string
  url: string
  description: string
  lookingJob: boolean
  isMyProfile?: boolean
}
