import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import { ButtonText, Container } from './styles'

type ButtonProps = {
  children: string
  isLoading?: boolean
} & TouchableOpacityProps

export function Button({
  children,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Container activeOpacity={0.6} disabled={isLoading || disabled} {...props}>
      {isLoading ? (
        <ActivityIndicator color="black" />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  )
}
