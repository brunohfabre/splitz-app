import { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native'

import { z } from 'zod'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { PasswordInput } from '@components/PasswordInput'
import { TextInput } from '@components/TextInput'
import { api } from '@lib/api'
import { useAuthStore } from '@stores/authStore'
import { useReAuthStore } from '@stores/reAuthStore'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { getValidationErrors } from '@utils/getValidationErrors'

import { Container, Content } from './styles'

const signInFormSchema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().min(1, 'Required'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const formRef = useRef<FormHandles>(null)

  const signIn = useAuthStore((state) => state.signIn)
  const authenticate = useReAuthStore((state) => state.authenticate)

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: SignInFormData) {
    try {
      const { email, password } = signInFormSchema.parse(data)

      setIsLoading(true)

      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token, user } = response.data

      authenticate()
      signIn({ token, user })
    } catch (err) {
      if (err instanceof z.ZodError) {
        formRef.current.setErrors(getValidationErrors(err))
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <PageHeader title="Sign in" />

        <Content>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ flex: 1, gap: 12 }}
          >
            <TextInput
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <PasswordInput name="password" placeholder="Password" />
          </Form>

          <Button
            onPress={() => formRef.current.submitForm()}
            isLoading={isLoading}
          >
            Sign in
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
