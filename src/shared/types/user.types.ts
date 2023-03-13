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
