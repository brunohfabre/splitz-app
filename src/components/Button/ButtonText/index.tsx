import { ReactNode } from 'react'
import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Heading } from '@components/Heading'

import { VariantType } from '..'

import { IconContainer } from './styles'

type ButtonTextProps = {
  isLoading: boolean
  variant: VariantType
  children: ReactNode
  icon?: ReactNode
}

export function ButtonText({
  isLoading,
  variant,
  children,
  icon,
}: ButtonTextProps) {
  const theme = useTheme()

  if (isLoading) {
    return (
      <ActivityIndicator
        color={variant === 'primary' ? theme.black : theme.white}
      />
    )
  }

  return (
    <>
      {typeof children === 'string' ? (
        <Heading
          size="md"
          style={{ color: variant === 'primary' ? theme.black : theme.white }}
        >
          {children}
        </Heading>
      ) : (
        children
      )}

      {!!icon && <IconContainer>{icon}</IconContainer>}
    </>
  )
}
