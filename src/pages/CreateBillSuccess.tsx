import { SafeAreaView, View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import SuccessAnimation from '../assets/animations/success.json'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export function CreateBillSuccess() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center">
        <LottieView
          autoPlay
          loop
          style={{
            width: 192,
            height: 192,
          }}
          source={SuccessAnimation}
        />
      </View>
      <View style={{ gap: 64 }}>
        <View style={{ gap: 8 }}>
          <Text className="text-white">Create bill success</Text>
          <Text className="text-white">Create bill success</Text>
        </View>

        <Button variant="primary" onPress={handleGoBack}>
          Back to home
        </Button>
      </View>
    </SafeAreaView>
  )
}
