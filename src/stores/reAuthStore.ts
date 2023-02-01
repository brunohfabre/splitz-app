import { create } from 'zustand'

type Store = {
  isAuthenticated: boolean
  authenticate: () => void
}

export const useReAuthStore = create<Store>((set) => ({
  isAuthenticated: false,
  authenticate: () => set(() => ({ isAuthenticated: true })),
}))
