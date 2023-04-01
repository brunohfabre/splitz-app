import { cloneElement } from 'react'
import { clsx } from 'clsx'
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type Variant = 'primary' | 'secondary' | 'ghost'

type RenderTextProps = {
  variant: Variant
  children: string
}

function RenderText({ children, variant }: RenderTextProps) {
  return (
    <Text
      className={clsx(
        'text-base font-semibold',
        variant === 'primary' && 'text-black',
        variant !== 'primary' && 'text-white',
      )}
    >
      {children}
    </Text>
  )
}

interface ButtonProps extends TouchableOpacityProps {
  variant: Variant
  children: string
  block?: boolean
  icon?: any
}

export function Button({
  variant,
  children,
  block,
  icon,
  style,
  ...props
}: ButtonProps) {
  if (variant === 'primary') {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        className={clsx(block && 'w-full')}
        {...props}
      >
        <LinearGradient
          colors={['#F55864', '#FFAE45']}
          className="h-14 flex-row justify-center items-center rounded-2xl px-6"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[{ gap: 8 }, style]}
        >
          <RenderText variant={variant}>{children}</RenderText>

          {icon && cloneElement(icon, { color: 'black' })}
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={clsx(
        'h-14 flex-row justify-center items-center rounded-2xl px-6',
        variant === 'secondary' && 'border-2 border-gray-600',
        block && 'w-full',
      )}
      style={[{ gap: 8 }, style]}
      {...props}
    >
      <RenderText variant={variant}>{children}</RenderText>

      {icon && cloneElement(icon, { color: 'white' })}
    </TouchableOpacity>
  )
}
