import { useState } from 'react'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'

import { FriendList } from './FriendList'
import { GroupList } from './GroupList'
import { Container, TypeContainer } from './styles'

export function Friendships() {
  const [type, setType] = useState('friends')

  return (
    <Container>
      <PageHeader title="Friends" />

      <TypeContainer>
        <Button
          onPress={() => setType('friends')}
          style={{
            flex: 1,
            backgroundColor: type === 'friends' ? '#d9d9d9' : '#F1F1F1',
          }}
        >
          Friends
        </Button>

        <Button
          disabled
          onPress={() => setType('groups')}
          style={{
            flex: 1,
            backgroundColor: type === 'groups' ? '#d9d9d9' : '#F1F1F1',
          }}
        >
          Groups
        </Button>
      </TypeContainer>

      {type === 'friends' && <FriendList />}
      {type === 'groups' && <GroupList />}
    </Container>
  )
}
