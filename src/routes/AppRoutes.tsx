import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Dashboard } from '../pages/Dashboard'
import { CreateBillSuccess } from '../pages/CreateBillSuccess'

type RootStackParamList = {
  dashboard: undefined
  'create-bill-success': undefined
}

declare global {
  export namespace ReactNavigation {
    export interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="create-bill-success" component={CreateBillSuccess} />
    </Stack.Navigator>
  )
}
