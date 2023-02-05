import Check from '@assets/icons/Check.svg'
import { Avatar } from '@components/Avatar'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useFriendshipsStore } from '@pages/CreateBill/stores/friendshipsStore'
import { FriendshipType } from '@services/friendships/types'

import { Container, Content, RadioButton } from './styles'

type FriendProps = {
  friendship: FriendshipType
}

export function Friend({ friendship }: FriendProps) {
  const { friendships, addFriendship, removeFriendship } = useFriendshipsStore(
    (state) => ({
      friendships: state.friendships,
      addFriendship: state.addFriendship,
      removeFriendship: state.removeFriendship,
    }),
  )

  const isSelected = friendships.some((item) => friendship.id === item.id)

  function toggleSelection() {
    if (isSelected) {
      removeFriendship(friendship.id)
    } else {
      addFriendship({ id: friendship.id, friendId: friendship.friend.id })
    }
  }

  return (
    <Container activeOpacity={0.6} onPress={toggleSelection}>
      <Avatar size="md" />

      <Content>
        <Heading size="md">{friendship.friend.name}</Heading>

        <Text size="sm">{friendship.friend.email}</Text>
      </Content>

      <RadioButton isSelected={isSelected}>
        {isSelected && <Check />}
      </RadioButton>
    </Container>
  )
}
