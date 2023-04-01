import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useOnboardingStore } from '../stores/onboardingStore'

export function Onboarding() {
  const navigation = useNavigation()

  const view = useOnboardingStore((state) => state.view)

  function handleViewOnboarding() {
    view()

    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }],
    })
  }

  return (
    <View className="flex-1 justify-center items-center">
      <Text>Onboarding page</Text>

      <Button onPress={handleViewOnboarding} title="go to home" />
    </View>
  )
}
