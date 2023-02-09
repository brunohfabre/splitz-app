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

const signInFormSchema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().min(1, 'Required'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignIn() {
  const signIn = useAuthStore((state) => state.signIn)
  const authenticate = useReAuthStore((state) => state.authenticate)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  async function handleSignIn(data: SignInFormData) {
    try {
      setIsLoading(true)

      const { email, password } = data

      const response = await api.post('/sessions', {
        email,
        password,
      })

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
        <PageHeader title="Sign in" />

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
          </Form>

          <Button onPress={handleSubmit(handleSignIn)} isLoading={isLoading}>
            Sign in
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
