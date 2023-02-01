import { useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import { Container, Error, Input } from './styles'

type TextInputProps = {
  errorMessage?: string
} & RNTextInputProps

export function TextInput({ errorMessage, ...props }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  return (
    <Container>
      <Input
        placeholderTextColor="#d9d9d9"
        isFocused={isFocused}
        isErrored={!!errorMessage}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}
