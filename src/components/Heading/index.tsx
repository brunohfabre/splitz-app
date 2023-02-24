import { ComponentProps } from 'react'

import { Container, Size } from './styles'

type HeadingProps = {
  children: string
  size: Size
} & ComponentProps<typeof Container>

export function Heading({ children, size, ...props }: HeadingProps) {
  return (
    <Container size={size} {...props}>
      {children}
    </Container>
  )
}
