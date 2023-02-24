import { ReactNode } from 'react'
import { TouchableOpacityProps, ActivityIndicator } from 'react-native'

import { ButtonText, Container, IconContainer } from './styles'

type ButtonProps = {
  children: ReactNode
  isLoading?: boolean
  block?: boolean
  icon?: ReactNode
} & TouchableOpacityProps

export function Button({
  children,
  isLoading,
  disabled,
  block,
  icon,
  ...props
}: ButtonProps) {
  return (
    <Container
      activeOpacity={0.6}
      disabled={isLoading || disabled}
      block={block}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color="black" />
      ) : (
        <>
          {typeof children === 'string' ? (
            <ButtonText>{children}</ButtonText>
          ) : (
            children
          )}

          {!!icon && <IconContainer>{icon}</IconContainer>}
        </>
      )}
    </Container>
  )
}
