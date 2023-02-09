import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { SafeAreaView } from 'react-native'

import { z } from 'zod'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { PasswordInput } from '@components/PasswordInput'
import { TextInput } from '@components/TextInput'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@lib/api'
import { useAuthStore } from '@stores/authStore'
import { useReAuthStore } from '@stores/reAuthStore'

import { Container, Content, Form } from './styles'

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
  const signIn = useAuthStore((state) => state.signIn)
  const authenticate = useReAuthStore((state) => state.authenticate)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleSignUp(data: SignUpFormData) {
    try {
      setIsLoading(true)

      const { name, email, password } = data

      const response = await api.post('/users', { name, email, password })

      const { token, user } = response.data

      authenticate()
      signIn({ token, user })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <PageHeader title="Sign up" />

        <Content>
          <Form>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Name"
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.name?.message}
                />
              )}
            />
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

            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  placeholder="Password"
                  style={{ marginTop: 12 }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Controller
              name="passwordConfirmation"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <PasswordInput
                  placeholder="Password confirmation"
                  style={{ marginTop: 12 }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.passwordConfirmation?.message}
                />
              )}
            />
          </Form>

          <Button onPress={handleSubmit(handleSignUp)} isLoading={isLoading}>
            Sign up
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
