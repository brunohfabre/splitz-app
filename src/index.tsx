import { SafeAreaProvider } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter'
import { PortalProvider } from '@gorhom/portal'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppHooks } from './hooks'
import { Routes } from './routes'

const queryClient = new QueryClient()

export function Root() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <PortalProvider>
        <AppHooks />

        <SafeAreaProvider>
          <StatusBar style="dark" />

          <NavigationContainer
            theme={{
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: '#ffffff',
              },
            }}
          >
            <Routes />
          </NavigationContainer>
        </SafeAreaProvider>
      </PortalProvider>
    </QueryClientProvider>
  )
}
