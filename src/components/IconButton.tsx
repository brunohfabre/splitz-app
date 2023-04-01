import { cloneElement, ReactElement } from 'react'
import { clsx } from 'clsx'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

type Variant = 'primary' | 'secondary' | 'ghost'

interface IconButtonProps extends TouchableOpacityProps {
  variant: Variant
  icon: ReactElement
}

export function IconButton({
  variant,
  icon,
  style,
  ...props
}: IconButtonProps) {
  if (variant === 'primary') {
    return (
      <TouchableOpacity activeOpacity={0.8} {...props}>
        <LinearGradient
          colors={['#F55864', '#FFAE45']}
          className="h-12 w-12 flex-row justify-center items-center rounded-2xl"
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[{ gap: 8 }, style]}
        >
          {cloneElement(icon, { color: 'black' })}
        </LinearGradient>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={clsx(
        'h-12 w-12 flex-row justify-center items-center rounded-2xl',
        variant === 'secondary' && 'border-2 border-gray-600',
      )}
      style={[{ gap: 8 }, style]}
      {...props}
    >
      {cloneElement(icon, { color: 'white' })}
    </TouchableOpacity>
  )
}
