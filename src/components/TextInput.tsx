import React, { useRef, useEffect, useCallback, useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  Text,
} from 'react-native'
import { useField } from '@unform/core'
import { clsx } from 'clsx'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

interface TextInputProps extends RNTextInputProps {
  name: string
  label: string
}

interface InputReference extends RNTextInput {
  value: string
}

export default function TextInput({
  name,
  label,
  onChangeText,
  ...rest
}: TextInputProps) {
  const inputRef = useRef<InputReference>(null)

  const { fieldName, registerField, defaultValue = '', error } = useField(name)

  const [isFocused, setIsFocused] = useState(false)

  const isErrored = !!error

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue
  }, [defaultValue])

  useEffect(() => {
    registerField<string>({
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
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value

      if (onChangeText) onChangeText(value)
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
    <View style={{ gap: 4 }}>
      {label && (
        <Text
          className={clsx(
            'text-base text-text-base',
            isErrored && 'text-red-500',
          )}
        >
          {label}
        </Text>
      )}

      <View
        className={clsx(
          'h-12 flex-row bg-shape-primary border-2 border-shape-primary rounded-2xl',
          isErrored && 'border-red-500',
          isFocused && 'border-primary',
        )}
      >
        <RNTextInput
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          className="flex-1 px-4 text-text-base"
          style={{ fontSize: 16 }}
          placeholderTextColor={fullConfig.theme?.colors?.placeholder as string}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </View>

      {error && <Text className="text-sm text-red-500">{error}</Text>}
    </View>
  )
}
