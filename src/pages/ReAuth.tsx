import { useCallback, useEffect } from 'react'

import { Alert, SafeAreaView, View } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'

import { useLocalAuthStore } from '../stores/localAuthStore'
import { useAuthStore } from '../stores/authStore'
import { Button } from '../components/Button'

import { useNavigation } from '@react-navigation/native'
import { PageHeader } from '../components/PageHeader'

export function ReAuth() {
  const navigation = useNavigation()

  const authenticate = useLocalAuthStore((state) => state.authenticate)
  const signOut = useAuthStore((state) => state.signOut)

  const localAuthenticate = useCallback(async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync()

      if (hasHardware) {
        const response = await LocalAuthentication.authenticateAsync()

        if (response.success) {
          authenticate()
        }
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'home' }],
        })
      }
    } catch (err) {
      Alert.alert(JSON.stringify(err))
    }
  }, [authenticate, navigation])

  useEffect(() => {
    localAuthenticate()
  }, [localAuthenticate])

  return (
    <SafeAreaView className="flex-1" style={{ gap: 12 }}>
      <PageHeader title="Auth" canGoBack={false} />

      <View className="flex-1 justify-end p-6" style={{ gap: 12 }}>
        <Button variant="primary" block onPress={localAuthenticate}>
          Sign in
        </Button>
        <Button variant="secondary" block onPress={signOut}>
          Sign out
        </Button>
      </View>
    </SafeAreaView>
  )
}
