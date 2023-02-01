import { Controller, useForm } from 'react-hook-form'

import { StatusBar } from 'expo-status-bar'
import { z } from 'zod'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { TextInput } from '@components/TextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@lib/api'
import { useNavigation } from '@react-navigation/native'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Container, Content, Form } from './styles'

const addFriendFormSchema = z.object({
  email: z.string().min(1, 'Required').email(),
})

type AddFriendFormData = z.infer<typeof addFriendFormSchema>

export function AddFriend() {
  const navigation = useNavigation()
  const queryClient = useQueryClient()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddFriendFormData>({
    resolver: zodResolver(addFriendFormSchema),
  })

  const { mutateAsync: addFriend, isLoading: isAddFriendLoading } = useMutation(
    async (data: AddFriendFormData) => {
      const { email } = data

      const response = await api.post('/friends', {
        email,
      })

      return response.data.friend
    },
    {
      onSuccess: (friend) => {
        queryClient.setQueryData(['friends'], (prevState: any) => [
          ...prevState,
          friend,
        ])
        navigation.goBack()
      },
    },
  )

  return (
    <>
      <Container>
        <PageHeader title="Add friend" />

        <Content>
          <Form>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Email"
                  style={{ marginTop: 12 }}
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.email?.message}
                />
              )}
            />
          </Form>

          <Button
            onPress={handleSubmit(addFriend as any)}
            isLoading={isAddFriendLoading}
          >
            Send invite
          </Button>
        </Content>
      </Container>

      <StatusBar />
    </>
  )
}
