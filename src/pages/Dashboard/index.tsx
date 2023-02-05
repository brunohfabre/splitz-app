import { SafeAreaView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Bell from '@assets/icons/Bell.svg'
import Plus from '@assets/icons/Plus.svg'
import Users from '@assets/icons/Users.svg'
import Wallet from '@assets/icons/Wallet.svg'
import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'
import { Footer } from '@components/Footer'
import { IconButton } from '@components/IconButton'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useBills } from '@services/bills'
import { useFriendships } from '@services/friendships'
import { useAuthStore } from '@stores/authStore'
import { getFirstAndLastName } from '@utils/getFirstAndLastName'

import { Shimmer } from './Shimmer'
import { Container, Content, Header, UserContainer, UserName } from './styles'

export function Dashboard() {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  const user = useAuthStore((state) => state.user)

  const userShortName = getFirstAndLastName(user.name)

  const { data: bills, isLoading: isBillsLoading } = useBills()
  const { data: friendships, isLoading: isFriendshipsLoading } =
    useFriendships()

  function handleNavigateToProfile() {
    navigation.navigate('profile')
  }

  function handleNavigateToNotifications() {
    navigation.navigate('notifications')
  }

  function handleNavigateToBillValue() {
    navigation.navigate('create-bill')
  }

  function handleNavigateToFriends() {
    navigation.navigate('friendships')
  }

  return (
    <Container>
      <SafeAreaView>
        <Header>
          <UserContainer onPress={handleNavigateToProfile}>
            <Avatar sourceUri={user.avatarUrl} />

            <UserName>{userShortName}</UserName>
          </UserContainer>

          <IconButton onPress={handleNavigateToNotifications}>
            <Bell />
          </IconButton>
        </Header>
      </SafeAreaView>

      {(!bills && isBillsLoading) || (!friendships && isFriendshipsLoading) ? (
        <Shimmer />
      ) : (
        <>
          <Content
            contentContainerStyle={{
              paddingBottom: insets.bottom + 48 + 56,
            }}
          >
            <Text size="sm" style={{ color: '#A1A1A1' }}>
              Your balance
            </Text>

            <Text size="sm" style={{ color: '#A1A1A1' }}>
              Friends
            </Text>

            <Text size="sm">{JSON.stringify(friendships, null, 2)}</Text>

            <Text size="sm" style={{ color: '#A1A1A1' }}>
              Bills
            </Text>

            <Text size="sm">{JSON.stringify(bills, null, 2)}</Text>
          </Content>

          <Footer>
            <Button
              onPress={() => alert('handle press')}
              style={{ flex: 1 }}
              disabled
            >
              <Wallet />
            </Button>
            <Button onPress={handleNavigateToBillValue} style={{ flex: 1 }}>
              <Plus />
            </Button>
            <Button onPress={handleNavigateToFriends} style={{ flex: 1 }}>
              <Users />
            </Button>
          </Footer>
        </>
      )}
    </Container>
  )
}
