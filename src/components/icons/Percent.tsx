import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export function Percent() {
  return (
    <Svg width={16} height={16} fill="none">
      <G
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="m12.5 3.5-9 9M4.75 6.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM11.25 13a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
