import { Text, View, ImageBackground, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import BackgroundPatternImage from '../assets/images/background-pattern.png'
import { Button } from '../components/Button'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToSignIn() {
    navigation.navigate('sign-in')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('sign-up')
  }

  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={BackgroundPatternImage}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-1 justify-end p-6" style={{ gap: 64 }}>
          <View style={{ gap: 8 }}>
            <Text className="text-gray-50 text-4xl font-semibold">Splitz</Text>
            <Text className="text-gray-100 text-base">
              Make it easier for people to share bills.
            </Text>
          </View>

          <View style={{ gap: 12 }}>
            <Button variant="primary" onPress={handleNavigateToSignIn}>
              Sign in
            </Button>

            <Button variant="secondary" onPress={handleNavigateToSignUp}>
              Create an account
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}
