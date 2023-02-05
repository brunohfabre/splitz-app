import { ComponentProps } from 'react'
import { SafeAreaView } from 'react-native'

import CaretLeft from '@assets/icons/CaretLeft.svg'
import { Heading } from '@components/Heading'
import { IconButton } from '@components/IconButton'
import { useNavigation } from '@react-navigation/native'

import { Container, TitleContainer } from './styles'

type PageHeaderProps = {
  title: string
  showBackButton?: boolean
} & ComponentProps<typeof SafeAreaView>

export function PageHeader({
  title,
  showBackButton = true,
  ...props
}: PageHeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <SafeAreaView>
      <Container {...props}>
        {showBackButton && (
          <IconButton onPress={handleGoBack}>
            <CaretLeft />
          </IconButton>
        )}

        <TitleContainer showBackButton={showBackButton}>
          <Heading size="lg">{title}</Heading>
        </TitleContainer>
      </Container>
    </SafeAreaView>
  )
}
