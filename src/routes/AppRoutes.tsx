import { AddFriend } from '@pages/AddFriend'
import { Dashboard } from '@pages/Dashboard'
import { Friends } from '@pages/Friends'
import { Notifications } from '@pages/Notifications'
import { Profile } from '@pages/Profile'
import { SplitBill } from '@pages/SplitBill'
import { SplitBillSuccess } from '@pages/SplitBillSuccess'
import { SplitBillValue } from '@pages/SplitBillValue'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type RootStackParamList = {
  dashboard: undefined
  notifications: undefined
  profile: undefined
  friends: undefined
  'add-friend': undefined
  'split-bill-value': undefined
  'split-bill': {
    value: number
  }
  'split-bill-success': undefined
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
      <Stack.Screen name="notifications" component={Notifications} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="friends" component={Friends} />
      <Stack.Screen
        name="add-friend"
        component={AddFriend}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name="split-bill-value" component={SplitBillValue} />
      <Stack.Screen name="split-bill" component={SplitBill} />
      <Stack.Screen name="split-bill-success" component={SplitBillSuccess} />
    </Stack.Navigator>
  )
}
