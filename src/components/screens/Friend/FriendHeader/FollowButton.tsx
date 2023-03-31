import { LoadingButton } from '@mui/lab'
import { useFollowButton } from './useFollowButton'

export const FollowButton = () => {
  const { handleFollow, isFollowed, isLoading } = useFollowButton()

  return (
    <LoadingButton
      fullWidth
      loading={isLoading}
      size="small"
      loadingPosition="center"
      variant="text"
      onClick={handleFollow}
    >
      {isFollowed ? 'Unfollow' : 'Follow'}
    </LoadingButton>
  )
}
