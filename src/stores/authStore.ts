import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useLocalAuthStore } from './localAuthStore'

type User = {
  id: string
  name: string
  email: string
}

type SignInData = {
  token: string
  user: User | null
}

type Store = {
  token: string
  user: User | null
  signIn: (data: SignInData) => void
  signOut: () => void
}

export const useAuthStore = create(
  persist<Store>(
    (set) => ({
      token: '',
      user: null,
      signIn: ({ token, user }: SignInData) => {
        set(() => ({
          token,
          user,
        }))

        useLocalAuthStore.getState().authenticate()
      },
      signOut: () => {
        set(() => ({
          token: '',
          user: null,
        }))

        useLocalAuthStore.getState().reset()
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
