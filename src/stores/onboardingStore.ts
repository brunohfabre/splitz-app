import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type Store = {
  isViewed: boolean
  view: () => void
}

export const useOnboardingStore = create(
  persist<Store>(
    (set) => ({
      isViewed: false,
      view: () =>
        set(() => ({
          isViewed: true,
        })),
    }),
    {
      name: 'onboarding',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
