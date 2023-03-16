export interface Profile {
  status: string
  aboutMe: string
  homeUrl: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photo: string
}

export interface User {
  _id: string
  name: string
  profile: Profile
}

export interface MeDto {
  _id: string
  email: string
  passwordHash: string
  name: string
  followedIds: [string]
  roles: [string]
  profile: Profile
}
