import { useRef, useEffect, useCallback, useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Text } from '@components/Text'
import { useField } from '@unform/core'

import { Container, Error, Input } from './styles'

type TextInputProps = {
  name: string
  label?: string
} & RNTextInputProps

export function TextInput({
  name,
  onChangeText,
  label,
  ...rest
}: TextInputProps) {
  const theme = useTheme()

  const inputRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  const isErrored = !!error

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

  return (
    <Container>
      {label && <Text>{label}</Text>}

      <Input
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        isFocused={isFocused}
        isErrored={isErrored}
        placeholderTextColor={theme.placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
