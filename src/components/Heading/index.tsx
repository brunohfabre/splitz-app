import { ComponentProps } from 'react'

import { Container } from './styles'

type HeadingProps = {
  children: string
} & ComponentProps<typeof Container>

export function Heading({ children, ...props }: HeadingProps) {
  return <Container {...props}>{children}</Container>
}
