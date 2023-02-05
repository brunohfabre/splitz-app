import { useState } from 'react'

import Trash from '@assets/icons/Trash.svg'
import { Avatar } from '@components/Avatar'
import { Dialog } from '@components/Dialog'
import { Heading } from '@components/Heading'
import { IconButton } from '@components/IconButton'
import { Text } from '@components/Text'
import { api } from '@lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Container, Content } from './styles'

type UserType = {
  id: string
  name: string
  email: string
}

type FriendshipType = {
  id: string
  created_at: string
  friend: UserType
}

type FriendProps = {
  friendship: FriendshipType
}

export function Friend({ friendship }: FriendProps) {
  const queryClient = useQueryClient()

  const [deleteFriendshipDialogVisible, setDeleteFriendshipDialogVisible] =
    useState(false)

  const {
    mutateAsync: deleteFriendship,
    isLoading: isDeleteFriendshipLoading,
  } = useMutation(
    async () => {
      await api.delete(`/friendships/${friendship.id}`)
    },
    {
      onSuccess: () => {
        queryClient.setQueryData(['friendships'], (prevState: any[]) =>
          prevState.filter((item) => item.id !== friendship.id),
        )
      },
    },
  )

  function handleOpenDeleteFriendshipDialog() {
    setDeleteFriendshipDialogVisible(true)
  }

  return (
    <>
      <Dialog
        open={deleteFriendshipDialogVisible}
        onOpenChange={setDeleteFriendshipDialogVisible}
        title="Delete friendship!"
        description="Really want to delete friendship?"
        actionText="Yes, delete"
        onAction={deleteFriendship}
        isActionLoading={isDeleteFriendshipLoading}
        cancelText="No"
      />

      <Container>
        <Avatar size="md" />

        <Content>
          <Heading size="md">{friendship.friend.name}</Heading>

          <Text size="sm">{friendship.friend.email}</Text>
        </Content>

        <IconButton onPress={handleOpenDeleteFriendshipDialog}>
          <Trash />
        </IconButton>
      </Container>
    </>
  )
}
