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

const signUpFormSchema = z
  .object({
    name: z.string().min(1, 'Required'),
    email: z.string().min(1, 'Required').email(),
    password: z.string().min(1, 'Required'),
    passwordConfirmation: z.string().min(1, 'Required'),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: 'custom',
        message: 'The passwords did not match',
        path: ['passwordConfirmation'],
      })
    }
  })

type SignUpFormData = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const formRef = useRef<FormHandles>(null)

  const signIn = useAuthStore((state) => state.signIn)
  const authenticate = useReAuthStore((state) => state.authenticate)

  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(data: SignUpFormData) {
    try {
      setIsLoading(true)

      const { name, email, password } = signUpFormSchema.parse(data)

      const response = await api.post('/users', { name, email, password })

      const { token, user } = response.data

      authenticate()
      signIn({ token, user })
    } catch (err) {
      console.log(err)

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
        <PageHeader title="Sign up" />

        <Content>
          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ flex: 1, gap: 12 }}
          >
            <TextInput
              name="name"
              placeholder="Name"
              autoCorrect={false}
              label="Name"
            />
            <TextInput
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              label="Email"
            />
            <PasswordInput
              name="password"
              placeholder="Password"
              label="Password"
            />
            <PasswordInput
              name="passwordConfirmation"
              placeholder="Password confirmation"
              label="Password confirmation"
            />
          </Form>

          <Button
            onPress={() => formRef.current?.submitForm()}
            isLoading={isLoading}
          >
            Sign up
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
