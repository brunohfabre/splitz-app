import { useState } from 'react'
import { Text, View, Button } from 'react-native'
import { useAuthStore } from '../stores/authStore'
import { Dialog } from '../components/Dialog'
import { useNavigation } from '@react-navigation/native'

export function Dashboard() {
  const navigation = useNavigation()
  const signOut = useAuthStore((state) => state.signOut)

  const [dialogVisible, setDialogVisible] = useState(false)

  function handleSignOut() {
    signOut()
  }

  return (
    <>
      <Dialog
        open={dialogVisible}
        onOpenChange={setDialogVisible}
        title="Sign out"
        description="Really want to sign out?"
        actionText="Yes, sign out"
        onAction={handleSignOut}
        cancelText="No"
      />

      <View className="flex-1 justify-center items-center">
        <Text className="text-white">Dashboard page</Text>

        <Button onPress={() => setDialogVisible(true)} title="sign out" />
        <Button
          onPress={() => navigation.navigate('create-bill-success')}
          title="create bill success"
        />
      </View>
    </>
  )
}
