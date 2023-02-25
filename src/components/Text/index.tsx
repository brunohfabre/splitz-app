import { ComponentProps } from 'react'

import { Container } from './styles'

type TextProps = {
  children: string
} & ComponentProps<typeof Container>

export function Text({ children, ...props }: TextProps) {
  return <Container {...props}>{children}</Container>
}
