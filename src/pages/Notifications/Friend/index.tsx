import { FriendType } from '..'

import {
  ActionsContainer,
  Container,
  Content,
  EmailText,
  InfoContainer,
  NameText,
} from './styles'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '@stores/authStore'
import { api } from '@lib/api'
import { Avatar } from '@components/Avatar'
import { Button } from '@components/Button'

import { useState } from 'react'

import { Dialog } from '@components/Dialog'

type FriendProps = {
  friend: FriendType
}

export function Friend({ friend }: FriendProps) {
  const user = useAuthStore((state) => state.user)

  const queryClient = useQueryClient()

  const [rejectFriendshipDialogVisible, setRejectFriendshipDialogVisible] =
    useState(false)
  const [acceptFriendshipDialogVisible, setAcceptFriendshipDialogVisible] =
    useState(false)

  const data = friend.user.id === user.id ? friend.friend : friend.user

  const {
    mutateAsync: handleRejectInvite,
    isLoading: isHandleRejectInviteLoading,
  } = useMutation(
    async () => {
      await api.put(`/invites/${friend.id}`)
    },
    {
      onSuccess: () => {
        queryClient.setQueryData(['invites'], (prevState: any) =>
          prevState.filter((item) => item.id !== friend.id),
        )
      },
    },
  )

  const {
    mutateAsync: handleAcceptInvite,
    isLoading: isHandleAcceptInviteLoading,
  } = useMutation(
    async () => {
      await api.put(`/invites/${friend.id}`)
    },
    {
      onSuccess: () => {
        queryClient.setQueryData(['invites'], (prevState: any) =>
          prevState.filter((item) => item.id !== friend.id),
        )
      },
    },
  )

  function handleOpenRejectFriendshipDialog() {
    setRejectFriendshipDialogVisible(true)
  }

  function handleOpenAcceptFriendshipDialog() {
    setAcceptFriendshipDialogVisible(true)
  }

  return (
    <>
      <Dialog
        open={rejectFriendshipDialogVisible}
        onOpenChange={setRejectFriendshipDialogVisible}
        title="Reject friendship!"
        description="Really want to reject friendship?"
        actionText="Yes, reject"
        onAction={handleRejectInvite}
        isActionLoading={isHandleRejectInviteLoading}
        cancelText="No"
      />

      <Dialog
        open={acceptFriendshipDialogVisible}
        onOpenChange={setAcceptFriendshipDialogVisible}
        title="Accept friendship!"
        description="Really want to accept friendship?"
        actionText="Yes, accept"
        onAction={handleAcceptInvite}
        isActionLoading={isHandleAcceptInviteLoading}
        cancelText="No"
      />

      <Container>
        <InfoContainer>
          <Avatar />

          <Content>
            <NameText>{data.name}</NameText>
            <EmailText>{data.email}</EmailText>
          </Content>
        </InfoContainer>

        <ActionsContainer>
          <Button
            style={{ flex: 1 }}
            onPress={handleOpenRejectFriendshipDialog}
          >
            Reject
          </Button>

          <Button
            style={{ flex: 1, marginLeft: 12 }}
            onPress={handleOpenAcceptFriendshipDialog}
          >
            Accept
          </Button>
        </ActionsContainer>
      </Container>
    </>
  )
}
