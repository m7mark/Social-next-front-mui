import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import { LoadingButton } from '@mui/lab'
import {
  Box,
  Checkbox,
  FormControlLabel,
  Skeleton,
  TextField,
} from '@mui/material'
import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { useMe } from '../../../../hooks/useMe'
import userPlaceholder from '../../../../shared/img/avatar.png'
import { LightTooltip, ShowServerError } from '../../../ui'
import styles from './EditProfile.module.scss'
import { useEditProfile } from './useEditProfile'

export const EditProfile = () => {
  const { meData } = useMe()

  const {
    onSubmit,
    serverError,
    closeServerError,
    isLoading,
    isServerError,
    uploadPhoto,
    isLoadingUpdatedImg,
  } = useEditProfile()

  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      lookingForAJob: false,
      aboutMe: '',
      homeUrl: '',
      lookingForAJobDescription: '',
      photo: '',
      status: '',
    },
    values: meData?.profile,
  })

  return (
    <Box
      sx={{
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="boxWhite"
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.photoEdit}>
        {isLoadingUpdatedImg ? (
          <Skeleton height={150} width={150} variant="circular" />
        ) : (
          <>
            <Image
              src={meData ? meData.profile.photo : userPlaceholder}
              alt="User photo"
              width={150}
              height={150}
              className={styles.img}
              priority
            />
            <div className={styles.backdrop} />
            <input
              type="file"
              name="image"
              onChange={(e) => {
                uploadPhoto(e)
              }}
              className={styles.input}
            />
            <LightTooltip title="Upload photo" arrow placement="top">
              <PhotoCameraOutlinedIcon className={styles.icon} />
            </LightTooltip>
          </>
        )}
      </div>
      <Controller
        rules={{
          maxLength: { value: 130, message: 'Maximum length 130 symbols' },
        }}
        name="status"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            error={!!error}
            helperText={error?.message || ' '}
            {...field}
            fullWidth
            id="status"
            InputLabelProps={{ shrink: true }}
            label="Status"
            autoFocus
          />
        )}
      />
      <Controller
        name="aboutMe"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message || ' '}
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="About me"
            type="text"
            id="aboutMe"
          />
        )}
      />
      <Controller
        name="homeUrl"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message || ' '}
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Home Url"
            type="text"
            id="homeUrl"
          />
        )}
      />
      <Controller
        name="lookingForAJob"
        control={control}
        render={({ field }) => (
          <FormControlLabel
            sx={{ alignSelf: 'flex-start', ml: 1 }}
            control={
              <Checkbox {...field} checked={field.value} id="lookingForAJob" />
            }
            label="Looking for a job?"
          />
        )}
      />
      <Controller
        name="lookingForAJobDescription"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error}
            helperText={error?.message || ' '}
            margin="dense"
            fullWidth
            InputLabelProps={{ shrink: true }}
            label="Your professional skills"
            type="text"
            id="lookingForAJobDescription"
          />
        )}
      />
      <LoadingButton
        size="large"
        // fullWidth
        type="submit"
        loading={isLoading}
        loadingPosition="center"
        variant="contained"
        sx={{ mt: 2, mb: 2, minWidth: '120px' }}
      >
        <span>Save</span>
      </LoadingButton>
      <ShowServerError
        isServerError={isServerError}
        serverError={serverError}
        closeServerError={closeServerError}
      />
    </Box>
  )
}
