import { useRef, useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { Empty } from '@components/Empty'
import { Footer } from '@components/Footer'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { useNavigation } from '@react-navigation/native'
import { useFriendships } from '@services/friendships'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import { Friend } from './Friend'
import { Container, Content } from './styles'

export function FriendList() {
  const formRef = useRef<FormHandles>(null)

  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  const [filteredFriendships, setFilteredFriendships] = useState([])

  const { data: friendships, isLoading: isFriendshipsLoading } = useFriendships(
    {
      onSuccess: (data) => {
        setFilteredFriendships(data)
      },
    },
  )

  function handleAddFriend() {
    navigation.navigate('add-friend')
  }

  function handleSearch(search: string) {
    const response = friendships.filter(
      (friendship) =>
        friendship.friend.name.toLowerCase().includes(search.toLowerCase()) ||
        friendship.friend.email.toLowerCase().includes(search.toLowerCase()),
    )

    setFilteredFriendships(response)
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
        <Form ref={formRef} onSubmit={undefined}>
          <TextInput
            name="search"
            placeholder="Search"
            onChangeText={handleSearch}
          />
        </Form>

        <Content
          contentContainerStyle={{
            paddingTop: 24,
            paddingBottom: 48 + 56 + insets.bottom,
          }}
        >
          {filteredFriendships.length ? (
            filteredFriendships.map((friendship) => (
              <Friend key={friendship.id} friendship={friendship} />
            ))
          ) : (
            <Empty title="No friends yet." />
          )}
        </Content>
      </Container>

      <Footer>
        <Button onPress={handleAddFriend} block>
          Add friend
        </Button>
      </Footer>
    </>
  )
}
