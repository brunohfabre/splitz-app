import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

export function Wallet() {
  return (
    <Svg width={16} height={16} fill="none">
      <G clipPath="url(#a)">
        <Path d="M11.25 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#000" />
        <Path
          d="M2.5 4.25V12a1 1 0 0 0 1 1h10a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H3.78A1.269 1.269 0 0 1 2.5 4.294 1.25 1.25 0 0 1 3.75 3H12"
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
