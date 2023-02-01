import { SafeAreaView } from 'react-native'

import Cube from '@assets/icons/Cube.svg'
import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { PageHeader } from '@components/PageHeader'
import { Text } from '@components/Text'
import { useNavigation } from '@react-navigation/native'
import { useSlideStore } from '@stores/slideStore'

import {
  Container,
  Content,
  CurrentStep,
  IconContainer,
  InfoContainer,
  Step,
  StepsContainer,
} from './styles'

export function SlideTwo() {
  const navigation = useNavigation()

  const viewSlide = useSlideStore((state) => state.viewSlide)

  function handleViewSlide() {
    viewSlide()

    navigation.reset({
      index: 0,
      routes: [{ name: 'home' }],
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <PageHeader title="" />

        <Content>
          <IconContainer>
            <Cube />
          </IconContainer>

          <InfoContainer>
            <Heading size="4xl">Simple. Paperless. Secure.</Heading>
            <Text size="md" style={{ marginTop: 8 }}>
              Keep track of payments and split bills with your friends.
            </Text>
          </InfoContainer>

          <StepsContainer>
            <Step />
            <CurrentStep />
          </StepsContainer>

          <Button onPress={handleViewSlide}>Get started now</Button>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
