import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

import AsyncStorage from '@react-native-async-storage/async-storage'

type Store = {
  seenSlide: boolean
  viewSlide: () => void
}

export const useSlideStore = create(
  persist<Store>(
    (set) => ({
      seenSlide: false,
      viewSlide: () =>
        set(() => ({
          seenSlide: true,
        })),
    }),
    {
      name: 'slide',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)
