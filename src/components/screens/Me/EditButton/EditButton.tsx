import { Button } from '@mui/material'
import { useRouter } from 'next/router'

export const EditButton = () => {
  const { push } = useRouter()
  return (
    <Button size="small" variant="text" onClick={() => push('/me/edit')}>
      Edit Profile
    </Button>
  )
}
