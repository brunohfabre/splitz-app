import { ActivityIndicator } from 'react-native'

import { create } from 'zustand'

import { Container } from './styles'

type Store = {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

export const useLoading = create<Store>((set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) =>
    set(() => ({
      isLoading,
    })),
}))

export function UseLoadingRender() {
  const isLoading = useLoading((state) => state.isLoading)

  if (!isLoading) {
    return <></>
  }

  return (
    <Container>
      <ActivityIndicator color="#ffffff" />
    </Container>
  )
}
