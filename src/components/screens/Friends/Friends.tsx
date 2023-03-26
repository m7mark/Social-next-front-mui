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
import { Controller, useForm } from 'react-hook-form'
import { FriendItem } from './FriendItem/FriendItem'
import { FriendItemSkeleton } from './FriendItem/FriendItemSkeleton'
import styles from './Friends.module.scss'
import { useFriends } from './useFriends'

export const Friends = () => {
  const {
    usersList,
    isLoading,
    changePage,
    onSubmit,
    currentPage,
    totalPages,
  } = useFriends()

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      term: '',
      isFriends: false,
    },
  })

  const isSkeleton = isLoading || !usersList
  const skeletonArray = new Array(10).fill(null)

  return (
    <>
      <div className={clsx(styles.findForm, 'boxWhite')}>
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

      <div className={styles.mainContainer}>
        <div className={clsx(styles.friendsList, 'boxWhite')}>
          {totalPages ? (
            <Pagination
              className={styles.paginate}
              count={totalPages}
              page={currentPage}
              onChange={changePage}
            />
          ) : (
            <Skeleton height={42} />
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
        <div className={clsx(styles.mainSidebar, 'boxWhite')}>Sidebar</div>
      </div>
    </>
  )
}
