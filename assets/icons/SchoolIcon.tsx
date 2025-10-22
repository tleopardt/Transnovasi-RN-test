import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SchoolIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path d="M12 12.8a.8.8 0 100 1.6.8.8 0 000-1.6z" fill={props.fill || "#000"} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2 9.906l-6.4-3.2V4.8h4.8V0h-6.4v6.706l-6.4 3.2V12.8H1.6v9.6H0V24h9.6v-6.4h4.8V24H24v-1.6h-1.6v-9.6h-3.2V9.906zM20.8 22.4v-8h-1.6v8h1.6zm-16 0H3.2v-8h1.6v8zm4.8-8.8a2.4 2.4 0 114.8 0 2.4 2.4 0 01-4.8 0z"
        fill={props.fill || "#000"}
      />
      <Path d="M12.8 24v-4.8h-1.6V24h1.6z" fill={props.fill || "#000"} />
    </Svg>
  )
}

export default SchoolIcon
