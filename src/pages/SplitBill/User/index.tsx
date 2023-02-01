import Check from '@assets/icons/Check.svg'
import { Avatar } from '@components/Avatar'

import { Container, Content, EmailText, NameText } from './styles'

type UserType = {
  id: string
  name: string
  email: string
  avatar_url: string
}

type UserProps = {
  user: UserType
  selected: boolean
  onSelect: () => void
}

export function User({ user, selected, onSelect }: UserProps) {
  return (
    <Container onPress={onSelect}>
      <Avatar />

      <Content>
        <NameText>{user.name}</NameText>
        <EmailText>{user.email}</EmailText>
      </Content>

      {selected && <Check />}
    </Container>
  )
}
