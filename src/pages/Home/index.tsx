import { SafeAreaView } from 'react-native'

import Cube from '@assets/icons/Cube.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import { Container, IconContainer, InfoContainer } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToSignIn() {
    navigation.navigate('sign-in')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('sign-up')
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <IconContainer>
          <Cube />
        </IconContainer>

        <InfoContainer>
          <Heading size="4xl">Splitz</Heading>
          <Text size="md" style={{ marginTop: 8 }}>
            Make it easier for people to share bills.
          </Text>
        </InfoContainer>

        <Button onPress={handleNavigateToSignUp}>Create an account</Button>

        <Button onPress={handleNavigateToSignIn} style={{ marginTop: 12 }}>
          Sign in
        </Button>
      </Container>
    </SafeAreaView>
  )
}
