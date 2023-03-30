import { LoadingButton } from '@mui/lab'
import { useFollowButton } from './useFollowButton'

export const FollowButton = () => {
  const { handleFollow, isFollowed, isLoading } = useFollowButton()

  const handleClick = () => {
    isFollowed ? handleFollow('unfollow') : handleFollow('follow')
  }

  return (
    <LoadingButton
      fullWidth
      loading={isLoading}
      size="small"
      loadingPosition="center"
      variant="text"
      onClick={handleClick}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </LoadingButton>
  )
}
