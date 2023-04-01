import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

import { IconBaseProps } from './types'

export function ChevronRight({ color = '#000' }: IconBaseProps) {
  return (
    <Svg width={16} height={16} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="m6 3 5 5-5 5"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
