import { api } from '@lib/api'
import { useAuthStore } from '@stores/authStore'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { createUseFriendshipsKey } from './keys'
import { FriendshipType } from './types'

export function useFriendships(options?: UseQueryOptions<FriendshipType[]>) {
  const user = useAuthStore((state) => state.user)

  return useQuery(
    createUseFriendshipsKey(),
    async () => {
      const response = await api.get('/friendships')

      return response.data.friendships.map((friendship) => ({
        id: friendship.id,
        createdAt: friendship.created_at,
        friend:
          friendship.user.id === user.id ? friendship.friend : friendship.user,
      }))
    },
    options,
  )
}
