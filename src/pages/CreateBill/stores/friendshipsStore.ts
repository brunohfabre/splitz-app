import { create } from 'zustand'

type Friendship = {
  id: string
  friendId: string
}

type Store = {
  friendships: Friendship[]
  addFriendship: (friendship: Friendship) => void
  removeFriendship: (id: string) => void
  clearFriendships: () => void
}

export const useFriendshipsStore = create<Store>((set) => ({
  friendships: [],
  addFriendship: (friendship: Friendship) =>
    set((state) => ({
      friendships: [...state.friendships, friendship],
    })),
  removeFriendship: (id: string) =>
    set((state) => ({
      friendships: state.friendships.filter((item) => item.id !== id),
    })),
  clearFriendships: () =>
    set(() => ({
      friendships: [],
    })),
}))
