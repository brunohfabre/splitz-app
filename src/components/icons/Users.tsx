import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export function Users() {
  return (
    <Svg width={16} height={16} fill="none">
      <G
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5.5 10a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5ZM9.713 3.619c.287-.078.584-.118.881-.119a3.25 3.25 0 1 1 0 6.5" />
        <Path d="M1 12.338a5.5 5.5 0 0 1 9 0M10.594 10a5.494 5.494 0 0 1 4.5 2.338" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
