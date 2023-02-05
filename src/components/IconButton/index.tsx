import { ReactNode } from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'

import { Container } from './styles'

type IconButtonProps = {
  children: ReactNode
  isLoading?: boolean
} & TouchableOpacityProps

export function IconButton({
  children,
  isLoading,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <Container disabled={isLoading || disabled} activeOpacity={0.6} {...props}>
      {isLoading ? <ActivityIndicator color="black" /> : children}
    </Container>
  )
}
