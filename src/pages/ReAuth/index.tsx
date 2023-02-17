import { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'

import * as LocalAuthentication from 'expo-local-authentication'
import { z } from 'zod'

import { Button } from '@components/Button'
import { PageHeader } from '@components/PageHeader'
import { TextInput } from '@components/TextInput'
import { api } from '@lib/api'
import { useAuthStore } from '@stores/authStore'
import { useReAuthStore } from '@stores/reAuthStore'

import { Container, Content, Form, OrText } from './styles'

const reAuthFormSchema = z.object({
  email: z.string().min(1, 'Required').email(),
  password: z.string().optional(),
})

type ReAuthFormData = z.infer<typeof reAuthFormSchema>

export function ReAuth() {
  const { user, signIn, signOut } = useAuthStore((state) => ({
    user: state.user,
    signIn: state.signIn,
    signOut: state.signOut,
  }))
  const authenticate = useReAuthStore((state) => state.authenticate)

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ReAuthFormData>({
  //   values: {
  //     email: user.email,
  //   },
  //   resolver: zodResolver(reAuthFormSchema),
  // })

  const [isLoading, setIsLoading] = useState(false)

  const localAuth = useCallback(async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync()

    if (hasHardware) {
      const response = await LocalAuthentication.authenticateAsync()

      if (response.success) {
        try {
          setIsLoading(true)

          const response = await api.get('/sessions')

          const { token, user } = response.data

          authenticate()
          signIn({ token, user })
        } catch (err) {
          console.log(err)
        } finally {
          setIsLoading(false)
        }
      }
    }
  }, [authenticate, signIn])

  const handleReAuth = useCallback(
    async (data?: ReAuthFormData) => {
      try {
        setIsLoading(true)

        if (data?.password) {
          const { email, password } = data

          const response = await api.post('/sessions', { email, password })

          const { token, user } = response.data

          authenticate()
          signIn({ token, user })
        } else {
          localAuth()
        }
      } finally {
        setIsLoading(false)
      }
    },
    [authenticate, signIn, localAuth],
  )

  useEffect(() => {
    localAuth()
  }, [localAuth])

  function handleSignOut() {
    signOut()
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <PageHeader title="Auth" showBackButton={false} />

        <Content>
          <Form>
            {/* <Controller
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
                  editable={false}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  placeholder="Password"
                  style={{ marginTop: 12 }}
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  errorMessage={errors.password?.message}
                />
              )}
            /> */}
          </Form>

          <Button
            // onPress={handleSubmit(handleReAuth)}
            isLoading={isLoading}
          >
            Sign in
          </Button>

          <OrText>or</OrText>

          <Button onPress={handleSignOut}>Sign out</Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
