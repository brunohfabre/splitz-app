import { useEffect, useState } from 'react'
import { TextInputProps as RNTextInputProps } from 'react-native'

import { toMoney } from 'vanilla-masker'

import { Container, Error, Input } from './styles'

type MoneyInputProps = {
  errorMessage?: string
} & RNTextInputProps

export function MoneyInput({
  errorMessage,
  onChangeText,
  value = '',
  ...props
}: MoneyInputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  useEffect(() => {
    setInputValue(toMoney(value))
  }, [value])

  function handleFocus() {
    setIsFocused(true)
  }

  function handleBlur() {
    setIsFocused(false)
  }

  function handleChange(text: string) {
    const maskedValue = toMoney(text)

    setInputValue(maskedValue)

    if (onChangeText) {
      const finalValue = maskedValue.replaceAll('.', '').replace(',', '.')

      onChangeText(finalValue)
    }
  }

  return (
    <Container>
      <Input
        placeholderTextColor="#d9d9d9"
        isFocused={isFocused}
        isErrored={!!errorMessage}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChange}
        value={inputValue}
        keyboardType="numeric"
        {...props}
      />

      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}
