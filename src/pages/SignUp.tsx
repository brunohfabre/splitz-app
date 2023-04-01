import { View, SafeAreaView } from 'react-native'
import TextInput from '../components/TextInput'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { useRef } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Button } from '../components/Button'
import PasswordInput from '../components/PasswordInput'
import { useAuthStore } from '../stores/authStore'

export function SignUp() {
  const formRef = useRef<FormHandles>(null)

  const signIn = useAuthStore((state) => state.signIn)

  function handleSignUp() {
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
      <PageHeader title="Sign up" />

      <View className="flex-1 pt-3 px-6 pb-6" style={{ gap: 12 }}>
        <Form ref={formRef} onSubmit={console.log} style={{ flex: 1, gap: 8 }}>
          <TextInput name="name" label="Name" placeholder="Name" />
          <TextInput name="email" label="E-mail" placeholder="E-mail" />
          <PasswordInput
            name="password"
            label="Password"
            placeholder="Password"
          />
          <PasswordInput
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm password"
          />
        </Form>

        <Button variant="primary" onPress={handleSignUp}>
          Sign in
        </Button>
      </View>
    </SafeAreaView>
  )
}
