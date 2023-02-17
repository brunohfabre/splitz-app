import { useRef, useEffect, useCallback, useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import { toMoney } from 'vanilla-masker'

import { useField } from '@unform/core'

import { Container, Error, Input } from './styles'

type MoneyInputProps = {
  name: string
} & RNTextInputProps

export function MoneyInput({ name, onChangeText, ...rest }: MoneyInputProps) {
  const inputRef = useRef(null)

  const [isFocused, setIsFocused] = useState(false)
  const [inputText, setInputText] = useState('')

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current)
          return inputRef.current.value.replaceAll('.', '').replace(',', '.')
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
      const value = toMoney(text)

      if (inputRef.current) inputRef.current.value = value
      if (onChangeText) onChangeText(value)

      setInputText(value)
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
      <Input
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        value={inputText}
        isFocused={isFocused}
        isErrored={!!error}
        placeholderTextColor="#d9d9d9"
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType="numeric"
        {...rest}
      />

      {!!error && <Error>{error}</Error>}
    </Container>
  )
}
