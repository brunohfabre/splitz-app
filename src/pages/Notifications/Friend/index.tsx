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

type FriendProps = {
  friend: FriendType
}

export function Friend({ friend }: FriendProps) {
  const user = useAuthStore((state) => state.user)

  const queryClient = useQueryClient()

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

  return (
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
          onPress={handleRejectInvite as any}
          isLoading={isHandleRejectInviteLoading}
        >
          Reject
        </Button>

        <Button
          style={{ flex: 1, marginLeft: 12 }}
          onPress={handleAcceptInvite as any}
          isLoading={isHandleAcceptInviteLoading}
        >
          Accept
        </Button>
      </ActionsContainer>
    </Container>
  )
}
