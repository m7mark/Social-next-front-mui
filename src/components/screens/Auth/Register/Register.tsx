import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Link, Snackbar } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'
import { validEmail } from '../../../../shared/regex'
import { useRegister } from './useRegister'

export const Register = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const { onSubmit, serverError, closeServerError, isLoading, isServerError } =
    useRegister()

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
            <HowToRegOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              rules={{
                minLength: { value: 3, message: 'Minimal length is 3' },
              }}
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error?.message || ' '}
                  {...field}
                  margin="none"
                  required
                  fullWidth
                  id="name"
                  InputLabelProps={{ shrink: true }}
                  label="Your name"
                  autoComplete="name"
                />
              )}
            />
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
                  autoComplete="new-password"
                />
              )}
            />
            <LoadingButton
              fullWidth
              type="submit"
              loading={isLoading}
              loadingPosition="center"
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              <span>Sign Up</span>
            </LoadingButton>
            <Link href="/auth" variant="body2">
              {'Already have an account? Sign In'}
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
