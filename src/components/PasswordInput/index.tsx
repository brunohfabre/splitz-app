import { useRef, useEffect, useCallback, useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import Eye from '@assets/icons/Eye.svg'
import EyeSlash from '@assets/icons/EyeSlash.svg'
import { useField } from '@unform/core'

import { Container, Error, Input, InputContainer, SuffixButton } from './styles'

type PasswordInputProps = {
  name: string
} & RNTextInputProps

export function PasswordInput({
  name,
  onChangeText,
  ...rest
}: PasswordInputProps) {
  const inputRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)
  const [hidden, setHidden] = useState(true)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value
        return ''
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value })
          inputRef.current.value = value
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' })
          inputRef.current.value = ''
        }
      },
    })
  }, [fieldName, registerField])

  const handleChangeText = useCallback(
    (text) => {
      if (inputRef.current) inputRef.current.value = text
      if (onChangeText) onChangeText(text)
    },
    [onChangeText],
  )

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function handleToggleVisibility() {
    setHidden((prevState) => !prevState)
  }

  return (
    <Container>
      <InputContainer isFocused={isFocused} isErrored={!!error}>
        <Input
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          placeholderTextColor="#d9d9d9"
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={hidden}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="oneTimeCode"
          {...rest}
        />

        <SuffixButton onPress={handleToggleVisibility}>
          {hidden ? <Eye /> : <EyeSlash />}
        </SuffixButton>
      </InputContainer>

      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
