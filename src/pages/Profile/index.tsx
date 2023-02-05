import { useState } from 'react'

import * as ImagePicker from 'expo-image-picker'

import Camera from '@assets/icons/Camera.svg'
import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'
import { Dialog } from '@components/Dialog'
import { IconButton } from '@components/IconButton'
import { PageHeader } from '@components/PageHeader'
import { useLoading } from '@hooks/loading'
import { api } from '@lib/api'
import { useAuthStore } from '@stores/authStore'

import {
  ButtonContainer,
  Container,
  Content,
  NameText,
  EmailText,
  AvatarContainer,
} from './styles'

export function Profile() {
  const { user, signOut, updateUser } = useAuthStore((state) => ({
    user: state.user,
    signOut: state.signOut,
    updateUser: state.updateUser,
  }))
  const setLoading = useLoading((state) => state.setLoading)

  const [signOutDialogVisible, setSignOutDialogVisible] = useState(false)

  function handleOpenSignOutDialog() {
    setSignOutDialogVisible(true)
  }

  async function handleSelectPicture() {
    try {
      setLoading(true)

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      })

      if (!result.canceled) {
        const formData = new FormData()

        const fileName =
          result.assets[0]?.uri.split('/')[
            result.assets[0]?.uri.split('/').length - 1
          ]

        formData.append('file', {
          uri: result.assets[0]?.uri,
          type: result.assets[0]?.type,
          name: fileName,
        } as any)

        const response = await api.patch(`/users/${user.id}/avatar`, formData)

        updateUser(response.data.user)
      }
    } finally {
      setLoading(false)
    }
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
          <AvatarContainer>
            <Avatar size="lg" sourceUri={user.avatarUrl} />

            <IconButton
              style={{ position: 'absolute', bottom: 0, right: 0 }}
              onPress={handleSelectPicture}
            >
              <Camera />
            </IconButton>
          </AvatarContainer>

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
