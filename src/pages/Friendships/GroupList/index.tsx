import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Button } from '@components/Button'
import { Empty } from '@components/Empty'
import { Footer } from '@components/Footer'
import { Text } from '@components/Text'
import { TextInput } from '@components/TextInput'
import { api } from '@lib/api'
import { useQuery } from '@tanstack/react-query'

import { Container } from './styles'

export function GroupList() {
  const insets = useSafeAreaInsets()

  const { data: groups, isLoading: isGroupsLoading } = useQuery(
    ['groups'],
    async () => {
      const response = await api.get('/groups')

      return response.data.groups
    },
  )

  function handleNewGroup() {
    alert('handle new group')
  }

  if (!groups && isGroupsLoading) {
    return (
      <View>
        <Text size="md">is loading</Text>
      </View>
    )
  }

  return (
    <>
      <Container
        contentContainerStyle={{
          paddingTop: 24,
          paddingHorizontal: 24,
          paddingBottom: 48 + 56 + insets.bottom,
        }}
      >
        <TextInput placeholder="Search" />

        {!groups.length && <Empty title="No groups yet." />}

        {!!groups.length && (
          <Text size="md">{JSON.stringify(groups, null, 2)}</Text>
        )}
      </Container>

      <Footer>
        <Button onPress={handleNewGroup} block>
          New group
        </Button>
      </Footer>
    </>
  )
}
