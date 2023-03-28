import SearchIcon from '@mui/icons-material/Search'
import { Checkbox, IconButton, Pagination, Paper } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import clsx from 'clsx'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import slider from '../../../shared/img/slider1.png'
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

      <div className={clsx(styles.mainContainer, 'twoColumn')}>
        <div className={clsx(styles.friendsList, 'boxWhite')}>
          {totalPages ? (
            <Pagination
              className={styles.paginate}
              count={totalPages}
              page={currentPage}
              onChange={changePage}
            />
          ) : (
            <div className={styles.paginateSkeleton} />
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
        <div className={clsx(styles.mainSidebar, 'boxWhite')}>
          <Image src={slider} alt="slider image" width={285} height={285} />
        </div>
      </div>
    </>
  )
}
