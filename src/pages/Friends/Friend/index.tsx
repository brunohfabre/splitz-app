import { Avatar } from '@components/Avatar'

import { Container, Content, EmailText, NameText } from './styles'

type UserType = {
  id: string
  name: string
  email: string
  avatar_url: string
}

type FriendProps = {
  user: UserType
}

export function Friend({ user }: FriendProps) {
  return (
    <Container>
      <Avatar />

      <Content>
        <NameText>{user.name}</NameText>
        <EmailText>{user.email}</EmailText>
      </Content>
    </Container>
  )
}
