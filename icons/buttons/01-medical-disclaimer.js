import * as React from "react"
import Svg, { G, Path, Rect } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={25}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style}
  >
    <G x={7}>
      <Path
        fill={props.prefthemecolor}
        stroke={props.prefthemecolor}
        d="M9 3c.416 0 .751.34.746.755l-.093 7.159a.653.653 0 0 1-1.306 0l-.093-7.159A.746.746 0 0 1 9 3Zm0 12a.942.942 0 0 1-.706-.308A1.031 1.031 0 0 1 8 13.953c0-.286.098-.532.294-.738A.942.942 0 0 1 9 12.907c.274 0 .51.103.706.308.196.206.294.452.294.739 0 .19-.046.364-.139.523-.089.159-.21.287-.361.383A.92.92 0 0 1 9 15Z"
      />
      <Rect
        width={16}
        height={16}
        x={1}
        y={1}
        stroke={props.prefthemecolor}
        strokeWidth={2}
        rx={1}
      />
    </G>
  </Svg>
)

export default SvgComponent
