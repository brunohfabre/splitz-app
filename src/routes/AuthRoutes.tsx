import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../pages/Home'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

type RootStackParamList = {
  onboarding: undefined
  home: undefined
  'sign-in': undefined
  'sign-up': undefined
}

declare global {
  export namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="sign-in" component={SignIn} />
      <Stack.Screen name="sign-up" component={SignUp} />
    </Stack.Navigator>
  )
}
