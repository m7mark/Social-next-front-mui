import { useQuery } from '@tanstack/react-query'
import { SubmitHandler } from 'react-hook-form'
import { UserService } from '../../../services/user/user.service'
import { useFilterStore } from '../../../shared/store/filter.store'

export const useFriendsList = () => {
  const { filter, addPage, addIsFriends, addTerm, addTotalPages } =
    useFilterStore()

  const { data: usersList, isLoading } = useQuery(
    ['getUserStaticProps', filter],
    () => UserService.getUsers({ ...filter }),
    {
      onSuccess: (data) => {
        addTotalPages(data.totalPages)
      },
    }
  )

  const onSubmit: SubmitHandler<{
    term: string | undefined
    isFriends: boolean
  }> = ({ term, isFriends }) => {
    addPage(1)
    addTerm(term)
    addIsFriends(isFriends)
  }

  return {
    usersList,
    isLoading,
    addPage,
    onSubmit,
    filter,
  }
}
