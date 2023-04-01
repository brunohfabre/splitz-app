import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ReAuth } from '../pages/ReAuth'

type RootStackParamList = {
  're-auth': undefined
}

declare global {
  export namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function ReAuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="re-auth" component={ReAuth} />
    </Stack.Navigator>
  )
}
