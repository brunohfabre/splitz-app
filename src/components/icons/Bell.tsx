import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export function Bell() {
  return (
    <Svg width={16} height={16} fill="none">
      <G
        clipPath="url(#a)"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M3.513 6.5A4.494 4.494 0 0 1 8.03 2c2.475.019 4.457 2.075 4.457 4.556V7c0 2.237.468 3.537.88 4.25a.498.498 0 0 1-.43.75H3.063a.499.499 0 0 1-.432-.75c.413-.713.882-2.013.882-4.25v-.5Z" />
        <Path d="M6 12v.5a2 2 0 0 0 4 0V12" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h16v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}
