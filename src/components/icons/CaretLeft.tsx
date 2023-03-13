import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

type CaretLeftProps = {
  color: string
}

export function CaretLeft({ color }: CaretLeftProps) {
  return (
    <Svg width={16} height={16} fill="none">
      <G clipPath="url(#a)">
        <Path
          d="M10 13 5 8l5-5"
          stroke="#000"
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
