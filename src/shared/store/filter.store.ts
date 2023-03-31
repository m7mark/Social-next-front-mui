import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Filter {
  term: string | undefined
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
  addTerm: (term: string | undefined) => void
  addIsFriends: (isFriends: boolean | undefined) => void
}

export const useFilterStore = create(
  immer<State & Actions>((set) => ({
    filter: {
      term: undefined,
      limit: undefined,
      page: 1,
      isFriends: false,
      totalPages: undefined,
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
        state.filter.term = term
      }),
    addIsFriends: (isFriends) =>
      set((state) => {
        state.filter.isFriends = !!isFriends
      }),
  }))
)
