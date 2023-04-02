import { Pagination } from '@mui/material'
import clsx from 'clsx'
import Image from 'next/image'
import slider from '../../../shared/img/slider1.png'
import { useFilterStore } from '../../../shared/store/filter.store'
import { FriendItem } from './FriendItem/FriendItem'
import { FriendItemSkeleton } from './FriendItem/FriendItemSkeleton'
import styles from './FriendsList.module.scss'
import { FriendsForm } from './FriendsSearchForm/FriendsForm'
import { useFriendsList } from './useFriendsList'

export const FriendsList = () => {
  const { friendsList, isLoading } = useFriendsList()

  const { filter, addPage } = useFilterStore()

  // const { filter, addPage } = useFilterStore(
  //   (state) => ({
  //     filter: state.filter,
  //     addPage: state.addPage,
  //   }),
  //   shallow
  // )

  const isSkeleton = isLoading || !friendsList
  const skeletonArray = new Array(10).fill(null)

  return (
    <>
      <div className={clsx(styles.form, 'boxWhite')}>
        <FriendsForm />
      </div>
      <div className={clsx(styles.mainContainer, 'twoColumn')}>
        <div className={clsx(styles.friendsList, 'boxWhite')}>
          {true ? (
            <Pagination
              disabled={filter.totalPages === undefined}
              hideNextButton
              variant="outlined"
              className={styles.paginate}
              count={filter.totalPages}
              page={filter.page}
              onChange={(_, p) => addPage(p)}
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
              {friendsList.docs.map((user) => (
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
          <Image
            priority
            src={slider}
            alt="slider image"
            width={285}
            height={285}
          />
        </div>
      </div>
    </>
  )
}
