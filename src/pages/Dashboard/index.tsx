import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Bell from '@assets/icons/Bell.svg'
import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'
import { IconButton } from '@components/IconButton'
import { api } from '@lib/api'
import { useNavigation } from '@react-navigation/native'
import { useAuthStore } from '@stores/authStore'
import { useQuery } from '@tanstack/react-query'
import { getFirstAndLastName } from '@utils/getFirstAndLastName'

import { Container, Footer, Header, UserContainer, UserName } from './styles'

export function Dashboard() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const user = useAuthStore((state) => state.user)

  const userShortName = getFirstAndLastName(user.name)

  const { data: splits, isLoading: isSplitsLoading } = useQuery(
    ['splits'],
    async () => {
      const response = await api.get('/splits')

      return response.data.splits
    },
  )

  function handleNavigateToProfile() {
    navigation.navigate('profile')
  }

  function handleNavigateToNotifications() {
    navigation.navigate('notifications')
  }

  function handleNavigateToBillValue() {
    navigation.navigate('split-bill-value')
  }

  function handleNavigateToFriends() {
    navigation.navigate('friends')
  }

  if (!splits && isSplitsLoading) {
    return (
      <View>
        <Text>is loading</Text>
      </View>
    )
  }

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <UserContainer onPress={handleNavigateToProfile}>
            <Avatar />

            <UserName>{userShortName}</UserName>
          </UserContainer>

          <IconButton onPress={handleNavigateToNotifications}>
            <Bell />
          </IconButton>
        </Header>
      </SafeAreaView>

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingBottom: insets.bottom + 48 + 56,
        }}
      >
        <Text>{JSON.stringify(splits, null, 2)}</Text>
      </ScrollView>

      <Footer
        style={{ paddingBottom: insets.bottom + 24 }}
        colors={['rgba(255, 255, 255, 0)', '#ffffff']}
      >
        <Button
          onPress={() => alert('handle press')}
          style={{ flex: 1 }}
          disabled
        >
          Bills
        </Button>
        <Button onPress={handleNavigateToBillValue} style={{ flex: 1 }}>
          +
        </Button>
        <Button onPress={handleNavigateToFriends} style={{ flex: 1 }}>
          Friends
        </Button>
      </Footer>
    </Container>
  )
}
