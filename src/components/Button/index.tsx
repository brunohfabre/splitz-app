import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'

import { ButtonText } from './ButtonText'
import { Container, PrimaryShape, SecondaryShape } from './styles'

export type VariantType = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children?: ReactNode
  isLoading?: boolean
  block?: boolean
  icon?: ReactNode
  variant?: VariantType
} & TouchableOpacityProps

export function Button({
  children,
  isLoading,
  disabled,
  block,
  icon,
  variant = 'primary',
  ...props
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <Container
        activeOpacity={0.6}
        disabled={isLoading || disabled}
        block={block}
        {...props}
      >
        <PrimaryShape>
          <ButtonText isLoading={isLoading} variant={variant} icon={icon}>
            {children}
          </ButtonText>
        </PrimaryShape>
      </Container>
    )
  }

  return (
    <Container
      activeOpacity={0.6}
      disabled={isLoading || disabled}
      block={block}
      {...props}
    >
      <SecondaryShape filled={variant === 'secondary'}>
        <ButtonText isLoading={isLoading} variant={variant} icon={icon}>
          {children}
        </ButtonText>
      </SecondaryShape>
    </Container>
  )
}
