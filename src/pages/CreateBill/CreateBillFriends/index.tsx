import { View } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import { Button } from '@components/Button'
import { Empty } from '@components/Empty'
import { Footer } from '@components/Footer'
import { PageHeader } from '@components/PageHeader'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useFriendships } from '@services/friendships'

import { Friend } from './Friend'
import { Container, Content } from './styles'

export function CreateBillFriends() {
  const navigation = useNavigation()

  const { data: friendships, isLoading: isFriendshipsLoading } =
    useFriendships()

  function handleGoBack() {
    navigation.goBack()
  }

  if (!friendships && isFriendshipsLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text size="md">is loading</Text>
      </View>
    )
  }

  return (
    <>
      <Container>
        <PageHeader title="Friends" />

        <Content>
          {friendships.length ? (
            friendships.map((friendship) => (
              <Friend key={friendship.id} friendship={friendship} />
            ))
          ) : (
            <Empty title="No friends yet." />
          )}
        </Content>

        <Footer>
          <Button block onPress={handleGoBack}>
            Select
          </Button>
        </Footer>
      </Container>

      <StatusBar />
    </>
  )
}
