import { useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import Eye from '@assets/icons/Eye.svg'
import EyeSlash from '@assets/icons/EyeSlash.svg'

import { Container, Error, Input, InputContainer, SuffixButton } from './styles'

type PasswordInputProps = {
  errorMessage?: string
} & RNTextInputProps

export function PasswordInput({ errorMessage, ...props }: PasswordInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [hidden, setHidden] = useState(true)

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function hadleToggleVisibility() {
    setHidden((prevState) => !prevState)
  }

  return (
    <Container>
      <InputContainer isFocused={isFocused} isErrored={!!errorMessage}>
        <Input
          placeholderTextColor="#d9d9d9"
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          {...props}
        />

        <SuffixButton onPress={hadleToggleVisibility}>
          {hidden ? <Eye /> : <EyeSlash />}
        </SuffixButton>
      </InputContainer>

      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}
