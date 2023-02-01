import { Heading } from '@components/Heading'

import { Container } from './styles'

type EmptyProps = {
  title: string
}

export function Empty({ title }: EmptyProps) {
  return (
    <Container>
      <Heading size="lg">{title}</Heading>
    </Container>
  )
}
