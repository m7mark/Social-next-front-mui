import { useState } from 'react'
import { useQuery } from 'react-query'
import { GetUsersProps, UserService } from '../../../services/user/user.service'

export const useFriends = () => {
  const [filter, setFilter] = useState<GetUsersProps>({
    term: undefined,
    limit: undefined,
    page: 1,
    isFriends: false,
  })
  const { data, isLoading } = useQuery(
    ['get-users', filter],
    () => UserService.getUsers({ ...filter }),
    { select: ({ data }) => data }
  )

  const setQueryFilter = (props: GetUsersProps) => {
    setFilter((prev) => ({ ...prev, ...props }))
  }

  return { usersList: data, isLoading, setQueryFilter }
}
