import SearchIcon from '@mui/icons-material/Search'
import {
  Checkbox,
  IconButton,
  Pagination,
  Paper,
  Skeleton,
} from '@mui/material'
import InputBase from '@mui/material/InputBase'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FriendItem } from './FriendItem/FriendItem'
import { FriendItemSkeleton } from './FriendItem/FriendItemSkeleton'
import styles from './Friends.module.scss'
import { useFriends } from './useFriends'

export const Friends = () => {
  const { usersList, isLoading, setQueryFilter } = useFriends()

  const [currentPage, setCurrentPage] = useState(1)
  const [countPages, setCountPages] = useState<number | undefined>(undefined)
  useEffect(() => {
    if (usersList?.totalPages) setCountPages(usersList?.totalPages)
  }, [usersList?.totalPages])

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
    setQueryFilter({ page: value })
  }

  const { control, handleSubmit } = useForm({
    mode: 'all',
    defaultValues: {
      term: '',
      isFriends: false,
    },
  })

  const onSubmit: SubmitHandler<{ term: string; isFriends: boolean }> = ({
    term,
    isFriends,
  }) => {
    setQueryFilter({ term, page: 1, isFriends })
    setCurrentPage(1)
  }

  const isSkeleton = isLoading || !usersList
  const skeletonArray = new Array(10).fill(null)

  return (
    <>
      <div className={clsx(styles.search, 'boxWhite')}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Paper
            variant="outlined"
            component="div"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              mb: 1,
            }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              control={control}
              name="term"
              render={({ field }) => (
                <InputBase
                  {...field}
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Find friends"
                  inputProps={{ 'aria-label': 'Find friends' }}
                />
              )}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <Controller
            control={control}
            name="isFriends"
            render={({ field }) => (
              <>
                <Checkbox {...field} />
                <span>Only my friends</span>
              </>
            )}
          />
        </form>
      </div>

      <div className={clsx(styles.friendsList, 'boxWhite')}>
        {countPages ? (
          <Pagination
            className={styles.paginate}
            count={countPages}
            page={currentPage}
            onChange={changePage}
          />
        ) : (
          <Skeleton />
        )}
        {isSkeleton ? (
          <>
            {skeletonArray.map((_, i) => (
              <FriendItemSkeleton key={i} className={styles.item} />
            ))}
          </>
        ) : (
          <>
            {usersList.docs.map((user) => (
              <FriendItem
                className={styles.item}
                key={user._id}
                user={user}
                isLoading={isLoading}
              />
            ))}
          </>
        )}
      </div>
    </>
  )
}
