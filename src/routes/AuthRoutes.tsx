import { Home } from '@pages/Home'
import { SignIn } from '@pages/SignIn'
import { SignUp } from '@pages/SignUp'
import { SlideOne } from '@pages/SlideOne'
import { SlideTwo } from '@pages/SlideTwo'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useSlideStore } from '@stores/slideStore'

type RootStackParamList = {
  'slide-one': undefined
  'slide-two': undefined
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
  const seenSlide = useSlideStore((state) => state.seenSlide)

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={seenSlide ? 'home' : 'slide-one'}
    >
      <Stack.Screen name="slide-one" component={SlideOne} />
      <Stack.Screen name="slide-two" component={SlideTwo} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="sign-in" component={SignIn} />
      <Stack.Screen name="sign-up" component={SignUp} />
    </Stack.Navigator>
  )
}
