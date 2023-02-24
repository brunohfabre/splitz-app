import { create } from 'zustand'

type Store = {
  groups: string[]
  addGroup: (id: string) => void
  removeGroup: (id: string) => void
}

export const useGroupsStore = create<Store>((set) => ({
  groups: [],
  addGroup: (id: string) =>
    set((state) => ({
      groups: [...state.groups, id],
    })),
  removeGroup: (id: string) =>
    set((state) => ({
      groups: state.groups.filter((item) => item !== id),
    })),
}))
