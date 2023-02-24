import { ReactNode } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Container } from './styles'

type FooterProps = {
  children: ReactNode
}

export function Footer({ children }: FooterProps) {
  const insets = useSafeAreaInsets()

  return (
    <Container
      colors={['rgba(255, 255, 255, 0)', '#ffffff']}
      paddingBottom={24 + insets.bottom}
    >
      {children}
    </Container>
  )
}
