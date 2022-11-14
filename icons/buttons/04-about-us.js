import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style}
  >
    <Path
      d="M7.114 13.176c0 3.761 3.147 7.47 8.06 10.635.272.166.598.334.817.334.229 0 .554-.168.818-.334 4.913-3.165 8.06-6.873 8.06-10.635 0-3.226-2.224-5.476-5.107-5.476-1.67 0-2.98.774-3.77 1.934C15.217 8.482 13.898 7.7 12.22 7.7c-2.874 0-5.107 2.25-5.107 5.476Zm1.776 0c0-2.233 1.459-3.736 3.427-3.736 1.591 0 2.479.967 3.033 1.811.246.351.413.466.641.466.238 0 .378-.123.642-.466.589-.835 1.459-1.81 3.04-1.81 1.97 0 3.429 1.502 3.429 3.735 0 3.111-3.244 6.548-6.944 9.009-.079.052-.132.088-.167.088s-.088-.036-.167-.088c-3.7-2.461-6.934-5.898-6.934-9.01Z"
      fill={props.prefThemeColor}
    />
  </Svg>
)

export default SvgComponent