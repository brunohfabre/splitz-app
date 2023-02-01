import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { Empty } from '@components/Empty'
import { PageHeader } from '@components/PageHeader'
import { api } from '@lib/api'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '@stores/authStore'
import { useQuery } from '@tanstack/react-query'

import { Friend } from './Friend'
import { FriendShimmer } from './FriendShimmer'
import { Container, Content, Footer } from './styles'

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

export function Friends() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const user = useAuthStore((state) => state.user)

  const { data: friends, isLoading: isFriendsLoading } = useQuery(
    ['friends'],
    async () => {
      const response = await api.get<{ friends: FriendType[] }>('/friends')

      return response.data.friends.map((item) =>
        item.friend.id === user.id ? item.user : item.friend,
      )
    },
  )

  function handleNavigateToAddFriend() {
    navigation.navigate('add-friend')
  }

  return (
    <Container style={{ marginTop: insets.top }}>
      <PageHeader title="Friends" />

      <Content
        contentContainerStyle={{
          paddingBottom: insets.bottom + 24 + 12 + 56,
          paddingHorizontal: 24,
        }}
      >
        {!friends && isFriendsLoading ? (
          <>
            {new Array(4).fill('').map((_, index) => (
              <FriendShimmer key={String(index)} />
            ))}
          </>
        ) : (
          <>
            {friends.length ? (
              <>
                {friends.map((item) => (
                  <Friend key={item.id} user={item} />
                ))}
              </>
            ) : (
              <Empty title="No friend yet." />
            )}
          </>
        )}
      </Content>

      <Footer
        style={{ paddingBottom: insets.bottom + 24 }}
        colors={['rgba(255, 255, 255, 0)', '#ffffff']}
      >
        <Button onPress={handleNavigateToAddFriend}>Add friend</Button>
      </Footer>
    </Container>
  )
}
