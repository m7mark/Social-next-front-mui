export interface ProfileDto {
  status: string
  aboutMe: string
  homeUrl: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photo: string
}

export interface UserDto {
  _id: string
  name: string
  profile: ProfileDto
}

export interface MeDto {
  _id: string
  email: string
  passwordHash: string
  name: string
  followedIds: [string]
  roles: [string]
  profile: ProfileDto
}

export interface UsersDto {
  docs: UserDto[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number
  nextPage: number
}

export interface FollowUserResponseDto {
  _id: string
  followedIds: string[]
}
