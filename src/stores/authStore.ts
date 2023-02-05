import Constants from 'expo-constants'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

import AsyncStorage from '@react-native-async-storage/async-storage'

type User = {
  id: string
  name: string
  email: string
  avatarUrl: string | null
  bio: string | null
}

type SignInData = {
  token: string
  user: User
}

type Store = {
  token: string
  user: User | null
  signIn: (data: SignInData) => void
  signOut: () => void
  updateUser: (user: User) => void
}

export const useAuthStore = create(
  persist<Store>(
    (set) => ({
      token: '',
      user: null,
      signIn: ({ token, user }: SignInData) =>
        set(() => ({
          token,
          user: {
            ...user,
            avatarUrl: user.avatarUrl.includes('http')
              ? user.avatarUrl
              : `${Constants.expoConfig.extra.API_URL}/files/${user.avatarUrl}`,
          },
        })),
      signOut: () =>
        set(() => ({
          token: '',
          user: null,
        })),
      updateUser: (user: User) =>
        set(() => ({
          user: {
            ...user,
            avatarUrl: user.avatarUrl.includes('http')
              ? user.avatarUrl
              : `${Constants.expoConfig.extra.API_URL}/files/${user.avatarUrl}`,
          },
        })),
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
