import * as React from "react"
import Svg, { G, Mask, Path, Defs, ClipPath, SvgProps } from "react-native-svg"

function FilterIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_84_135)">
        <Mask
          id="a"
          style={{
            maskType: "luminance"
          }}
          maskUnits="userSpaceOnUse"
          x={0}
          y={0}
          width={24}
          height={24}
        >
          <Path d="M24 0H0v24h24V0z" fill={props.fill || "#fff"} />
        </Mask>
        <G mask="url(#a)" stroke={props.stroke || "#fff"} strokeWidth={1.5} strokeLinecap="round">
          <Path d="M3 7h18M6 12h12M10 17h4" />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_84_135">
          <Path fill={props.fill || "#fff"} d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FilterIcon
