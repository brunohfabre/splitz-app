import { useState } from 'react'

import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'
import { Dialog } from '@components/Dialog'
import { PageHeader } from '@components/PageHeader'
import { useAuthStore } from '@stores/authStore'

import {
  ButtonContainer,
  Container,
  Content,
  NameText,
  EmailText,
} from './styles'

export function Profile() {
  const { user, signOut } = useAuthStore((state) => ({
    user: state.user,
    signOut: state.signOut,
  }))

  const [signOutDialogVisible, setSignOutDialogVisible] = useState(false)

  function handleOpenSignOutDialog() {
    setSignOutDialogVisible(true)
  }

  return (
    <>
      <Dialog
        open={signOutDialogVisible}
        onOpenChange={setSignOutDialogVisible}
        title="Sign out!"
        description="Really want to sign out?"
        actionText="Yes, sign out"
        onAction={signOut}
        cancelText="No"
      />

      <Container>
        <PageHeader title="Profile" />

        <Content>
          <Avatar size="lg" />

          <NameText>{user.name}</NameText>
          <EmailText>{user.email}</EmailText>
        </Content>

        <ButtonContainer>
          <Button onPress={handleOpenSignOutDialog}>Exit</Button>
        </ButtonContainer>
      </Container>
    </>
  )
}
