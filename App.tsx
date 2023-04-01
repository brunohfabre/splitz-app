import { StatusBar } from 'expo-status-bar'
import { Routes } from './src/routes'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { PortalProvider } from '@gorhom/portal'

export default function App() {
  return (
    <PortalProvider>
      <NavigationContainer
        theme={{
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: '#121214',
          },
        }}
      >
        <Routes />
      </NavigationContainer>

      <StatusBar style="light" />
    </PortalProvider>
  )
}
