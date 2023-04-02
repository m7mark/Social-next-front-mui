import { useQuery } from '@tanstack/react-query'
import { UserService } from '../../../services/user/user.service'
import { useFilterStore } from '../../../shared/store/filter.store'

export const useFriendsList = () => {
  const { filter, addTotalPages } = useFilterStore()

  const { data: friendsList, isLoading } = useQuery(
    ['getFriends', filter],
    () => UserService.getUsers({ ...filter }),
    {
      onSuccess: (data) => {
        addTotalPages(data.totalPages)
      },
    }
  )

  return {
    friendsList,
    isLoading,
  }
}
