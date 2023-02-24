import Cube from '@assets/icons/Cube.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'

import {
  ButtonsContainer,
  Container,
  IconContainer,
  InfoContainer,
} from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToSignIn() {
    navigation.navigate('sign-in')
  }

  function handleNavigateToSignUp() {
    navigation.navigate('sign-up')
  }

  return (
    <Container>
      <IconContainer>
        <Cube />
      </IconContainer>

      <InfoContainer>
        <Heading size="4xl">Splitz</Heading>
        <Text size="md">Make it easier for people to share bills.</Text>
      </InfoContainer>

      <ButtonsContainer>
        <Button onPress={handleNavigateToSignUp}>Create an account</Button>

        <Button onPress={handleNavigateToSignIn}>Sign in</Button>
      </ButtonsContainer>
    </Container>
  )
}
