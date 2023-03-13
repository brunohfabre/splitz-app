import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export function Plus() {
  return (
    <Svg width={16} height={16} fill="none">
      <G
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2.5 8h11M8 2.5v11" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
