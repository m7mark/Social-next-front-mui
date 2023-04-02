import SearchIcon from '@mui/icons-material/Search'
import { FormControlLabel, IconButton, Paper, Switch } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { Controller, useForm } from 'react-hook-form'
import { useFilterStore } from '../../../../shared/store/filter.store'

export const FriendsForm = () => {
  const { filter, addIsFriends, addTerm } = useFilterStore()
  const { control, handleSubmit } = useForm<{ term: string }>({
    values: { term: filter.term },
  })

  return (
    <>
      <Paper
        variant="outlined"
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          mb: 1,
        }}
        onSubmit={handleSubmit(({ term }) => addTerm(term))}
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
      <FormControlLabel
        sx={{ alignSelf: 'flex-start', ml: 1 }}
        control={
          <Switch
            onChange={(_, isFriends) => addIsFriends(isFriends)}
            checked={filter.isFriends}
            id="lookingForAJob"
          />
        }
        label="Only my friends"
      />
    </>
  )
}
