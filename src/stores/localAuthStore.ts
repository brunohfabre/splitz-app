import { create } from 'zustand'

type Store = {
  isAuthenticated: boolean
  authenticate: () => void
  reset: () => void
}

export const useLocalAuthStore = create<Store>((set) => ({
  isAuthenticated: false,
  authenticate: () =>
    set(() => ({
      isAuthenticated: true,
    })),
  reset: () =>
    set(() => ({
      isAuthenticated: false,
    })),
}))
