import { ComponentProps } from 'react'

import { Container, Size } from './styles'

type TextProps = {
  children: string
  size: Size
} & ComponentProps<typeof Container>

export function Text({ children, size, ...props }: TextProps) {
  return (
    <Container size={size} {...props}>
      {children}
    </Container>
  )
}
