import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Snackbar } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'
import { validEmail } from '../../../../shared/regex'
import { useLogin } from './useLogin'

export const Login = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const {
    onSubmit,
    loginTestUser,
    serverError,
    closeServerError,
    isLoading,
    isServerError,
  } = useLogin()

  return (
    <>
      <Container maxWidth="xs" className="boxWhite">
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              rules={{
                // required: 'Email is required',
                pattern: {
                  value: validEmail,
                  message: 'Email is incorrect',
                },
              }}
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error?.message || ' '}
                  {...field}
                  inputProps={{ inputMode: 'email' }}
                  margin="none"
                  required
                  fullWidth
                  id="email"
                  InputLabelProps={{ shrink: true }}
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                />
              )}
            />
            <Controller
              rules={{
                minLength: { value: 4, message: 'Minimal length is 4' },
              }}
              name="password"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  error={!!error}
                  helperText={error?.message || ' '}
                  margin="dense"
                  required
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              )}
            />
            <LoadingButton
              fullWidth
              type="submit"
              loading={isLoading}
              loadingPosition="center"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <span>Sign In</span>
            </LoadingButton>
            <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 0, mb: 2 }}
              onClick={loginTestUser}
            >
              Sign In as guest
            </Button>
            <Link href="/auth/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </form>
        </Box>
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
      </Container>
    </>
  )
}
