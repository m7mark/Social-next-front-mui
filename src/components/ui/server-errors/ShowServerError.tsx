import { Alert, Snackbar } from '@mui/material'

interface IShowServerErrorProps {
  isServerError: boolean
  closeServerError: () => void
  serverError: string | undefined
}

export const ShowServerError = ({
  closeServerError,
  isServerError,
  serverError,
}: IShowServerErrorProps) => {
  return (
    <Snackbar
      open={isServerError}
      autoHideDuration={6000}
      onClose={closeServerError}
    >
      <Alert
        severity="error"
        sx={{ width: '100%' }}
        variant="filled"
        onClose={closeServerError}
      >
        {serverError}
      </Alert>
    </Snackbar>
  )
}
