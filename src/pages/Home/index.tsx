import { BackgroundPattern } from '@components/BackgroundPattern'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import { ButtonsContainer, Container, InfoContainer } from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToSignIn() {
    navigation.navigate('sign-in')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('sign-up')
  }

  return (
    <BackgroundPattern>
      <Container>
        <InfoContainer>
          <Heading size="4xl">Splitz</Heading>
          <Text size="md">Make it easier for people to share bills.</Text>
        </InfoContainer>

        <ButtonsContainer>
          <Button onPress={handleNavigateToSignUp} variant="secondary">
            Create an account
          </Button>

          <Button onPress={handleNavigateToSignIn}>Sign in</Button>
        </ButtonsContainer>
      </Container>
    </BackgroundPattern>
  )
}
