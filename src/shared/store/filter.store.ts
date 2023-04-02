import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Filter {
  term: string
  limit: number | undefined
  page: number
  isFriends: boolean
  totalPages: number | undefined
}

type State = {
  filter: Filter
}

type Actions = {
  addTotalPages: (total: number) => void
  addPage: (page: number) => void
  addTerm: (term: string) => void
  addIsFriends: (isFriends: boolean | undefined) => void
  resetFilter: () => void
}

const initialState = {
  term: '',
  limit: undefined,
  page: 1,
  isFriends: false,
  totalPages: undefined,
}

export const useFilterStore = create(
  immer<State & Actions>((set) => ({
    filter: {
      ...initialState,
    },
    totalPages: undefined,
    addTotalPages: (total) =>
      set((state) => {
        state.filter.totalPages = total
      }),
    addPage: (page) =>
      set((state) => {
        state.filter.page = page
      }),
    addTerm: (term) =>
      set((state) => {
        if (state.filter.term === term) return
        state.filter.term = term
        state.filter.page = 1
        state.filter.totalPages = undefined
      }),
    addIsFriends: (isFriends) =>
      set((state) => {
        state.filter.isFriends = !!isFriends
        state.filter.page = 1
        state.filter.totalPages = undefined
      }),
    resetFilter: () =>
      set((state) => {
        state.filter = initialState
      }),
  }))
)
