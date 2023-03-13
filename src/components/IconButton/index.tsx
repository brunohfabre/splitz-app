import { ReactNode } from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import { Container, PrimaryShape, SecondaryShape } from './styles'

type VariantType = 'primary' | 'secondary' | 'ghost'

type IconButtonProps = {
  children: ReactNode
  variant?: VariantType
  isLoading?: boolean
} & TouchableOpacityProps

export function IconButton({
  children,
  variant = 'primary',
  isLoading,
  disabled,
  ...props
}: IconButtonProps) {
  if (variant === 'primary') {
    return (
      <Container
        activeOpacity={0.6}
        disabled={isLoading || disabled}
        {...props}
      >
        <PrimaryShape>
          {isLoading ? <ActivityIndicator color="black" /> : children}
        </PrimaryShape>
      </Container>
    )
  }

  return (
    <Container activeOpacity={0.6} disabled={isLoading || disabled} {...props}>
      <SecondaryShape>
        {isLoading ? <ActivityIndicator color="white" /> : children}
      </SecondaryShape>
    </Container>
  )
}
