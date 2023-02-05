import { Container, Size } from './styles'

type AvatarProps = {
  size?: Size
  sourceUri?: string
}

export function Avatar({ size = 'md', sourceUri }: AvatarProps) {
  return <Container source={{ uri: sourceUri }} size={size} />
}
