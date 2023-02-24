import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Empty } from '@components/Empty'
import { PageHeader } from '@components/PageHeader'
import { api } from '@lib/api'
import { useQuery } from '@tanstack/react-query'

import { Friend } from './Friend'
import { FriendShimmer } from './FriendShimmer'
import { Container, Content } from './styles'

export type FriendType = {
  id: string
  accepted_at: string
  friend: {
    id: string
    name: string
    email: string
    avatar_url: string
  }
  user: {
    id: string
    name: string
    email: string
    avatar_url: string
  }
}

export function Notifications() {
  const insets = useSafeAreaInsets()

  const { data: invites, isLoading: isInvitesLoading } = useQuery(
    ['invites'],
    async () => {
      const response = await api.get<{ invites: FriendType[] }>('/invites')

      return response.data.invites
    },
  )

  return (
    <Container>
      <PageHeader title="Notifications" />

      <Content
        contentContainerStyle={{
          paddingBottom: insets.bottom + 24,
          paddingHorizontal: 24,
        }}
      >
        {!invites && isInvitesLoading ? (
          <>
            {new Array(4).fill('').map((_, index) => (
              <FriendShimmer key={String(index)} />
            ))}
          </>
        ) : (
          <>
            {invites?.length ? (
              <>
                {invites.map((item) => (
                  <Friend key={item.id} friend={item} />
                ))}
              </>
            ) : (
              <Empty title="No notification yet."></Empty>
            )}
          </>
        )}
      </Content>
    </Container>
  )
}
