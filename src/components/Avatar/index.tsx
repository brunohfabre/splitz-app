import { Container, Size } from './styles'

type AvatarProps = {
  size?: Size
}

export function Avatar({ size = 'md' }: AvatarProps) {
  return <Container size={size} />
}
