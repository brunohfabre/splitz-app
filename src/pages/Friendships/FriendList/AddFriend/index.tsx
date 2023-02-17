import { useRef } from 'react'

import { StatusBar } from 'expo-status-bar'
import { z } from 'zod'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { TextInput } from '@components/TextInput'
import { api } from '@lib/api'
import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { getValidationErrors } from '@utils/getValidationErrors'

import { Container, Content } from './styles'

const addFriendFormSchema = z.object({
  email: z.string().min(1, 'Required').email(),
})

type AddFriendFormData = z.infer<typeof addFriendFormSchema>

export function AddFriend() {
  const formRef = useRef<FormHandles>(null)

  const navigation = useNavigation()

  const { mutateAsync: addFriend, isLoading: isAddFriendLoading } = useMutation(
    async (data: AddFriendFormData) => {
      const { email } = data

      await api.post('/friendships', {
        email,
      })
    },
    {
      onSuccess: (_, data: AddFriendFormData) => {
        alert(`Invite to ${data.email} sent.`)

        navigation.goBack()
      },
    },
  )

  function handleSubmit(data: AddFriendFormData) {
    try {
      const parsedData = addFriendFormSchema.parse(data)

      addFriend(parsedData)
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current.setErrors(getValidationErrors(err))
      }
    }
  }

  return (
    <>
      <Container>
        <PageHeader title="Add friend" />

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit} style={{ flex: 1 }}>
            <TextInput
              name="email"
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </Form>

          <Button
            onPress={() => formRef.current.submitForm()}
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
