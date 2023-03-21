import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { useQuery } from 'react-query'
import { GetUsersProps, UserService } from '../../../services/user/user.service'

export const useFriends = () => {
  const [filter, setFilter] = useState<GetUsersProps>({
    term: undefined,
    limit: undefined,
    page: 1,
    isFriends: false,
  })
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number | undefined>(undefined)

  const { data, isLoading } = useQuery(
    ['get-users', filter],
    () => UserService.getUsers({ ...filter }),
    { select: ({ data }) => data }
  )

  useEffect(() => {
    if (data?.totalPages) setTotalPages(data?.totalPages)
  }, [data?.totalPages])

  const setQueryFilter = (props: GetUsersProps) => {
    setFilter((prev) => ({ ...prev, ...props }))
  }

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    setQueryFilter({ page: value })
  }

  const onSubmit: SubmitHandler<{ term: string; isFriends: boolean }> = ({
    term,
    isFriends,
  }) => {
    setQueryFilter({ term, page: 1, isFriends })
    setCurrentPage(1)
  }

  return {
    usersList: data,
    isLoading,
    currentPage,
    totalPages,
    changePage,
    onSubmit,
  }
}
