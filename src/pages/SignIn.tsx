import { View, SafeAreaView } from 'react-native'
import TextInput from '../components/TextInput'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { useRef } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/Button'
import PasswordInput from '../components/PasswordInput'
import { useAuthStore } from '../stores/authStore'

export function SignIn() {
  const formRef = useRef<FormHandles>(null)

  const signIn = useAuthStore((state) => state.signIn)

  function handleSignIn() {
    signIn({
      token: 'asdasd',
      user: {
        id: '123123',
        name: 'Bruno Fabre',
        email: 'bruno.hfabre@gmail.com',
      },
    })
  }

  return (
    <SafeAreaView className="flex-1">
      <PageHeader title="Sign in" />

      <View className="flex-1 pt-3 px-6 pb-6" style={{ gap: 12 }}>
        <Form ref={formRef} onSubmit={console.log} style={{ flex: 1, gap: 8 }}>
          <TextInput name="email" label="E-mail" placeholder="E-mail" />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Password"
          />
        </Form>

        <Button variant="primary" onPress={handleSignIn}>
          Sign in
        </Button>
        <Button variant="secondary" onPress={handleSignIn}>
          Sign in with Apple
        </Button>
        <Button variant="secondary" onPress={handleSignIn}>
          Sign in with GitHub
        </Button>
      </View>
    </SafeAreaView>
  )
}
