import { CreateBill } from '@pages/CreateBill'
import { CreateBillFriends } from '@pages/CreateBill/CreateBillFriends'
import { CreateBillGroups } from '@pages/CreateBill/CreateBillGroups'
import { CreateBillSuccess } from '@pages/CreateBill/CreateBillSuccess'
import { Dashboard } from '@pages/Dashboard'
import { Friendships } from '@pages/Friendships'
import { AddFriend } from '@pages/Friendships/FriendList/AddFriend'
import { Notifications } from '@pages/Notifications'
import { Profile } from '@pages/Profile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

type RootStackParamList = {
  dashboard: undefined
  notifications: undefined
  profile: undefined
  friendships: undefined
  'add-friend': undefined
  'create-bill': undefined
  'create-bill-friends': undefined
  'create-bill-groups': undefined
  'create-bill-success': {
    type: string
    isSplit: boolean
  }
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
      <Stack.Screen name="friendships" component={Friendships} />
      <Stack.Screen
        name="add-friend"
        component={AddFriend}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name="create-bill" component={CreateBill} />
      <Stack.Screen
        name="create-bill-friends"
        component={CreateBillFriends}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen
        name="create-bill-groups"
        component={CreateBillGroups}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name="create-bill-success" component={CreateBillSuccess} />
    </Stack.Navigator>
  )
}
