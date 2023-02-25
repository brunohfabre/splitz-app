import { ReactNode } from 'react'

import BackgroundPatternImage from '@assets/background-pattern.png'

import { Container } from './styles'

type BackgroundPatternProps = {
  children: ReactNode
}

export function BackgroundPattern({ children }: BackgroundPatternProps) {
  return (
    <Container source={BackgroundPatternImage} resizeMode="cover">
      {children}
    </Container>
  )
}
