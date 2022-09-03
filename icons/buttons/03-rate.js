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
      d="M9.91 24.268c.412.316.922.21 1.52-.22L16 20.69l4.57 3.358c.598.43 1.116.536 1.53.22.404-.308.492-.818.255-1.512l-1.802-5.37 4.614-3.314c.589-.422.844-.887.677-1.38-.167-.483-.633-.72-1.363-.712l-5.66.036L17.1 6.619c-.22-.703-.58-1.08-1.099-1.08-.51 0-.87.377-1.099 1.08l-1.722 5.397-5.66-.036c-.73-.008-1.187.229-1.354.712-.167.493.08.958.677 1.38l4.614 3.314-1.81 5.37c-.238.694-.15 1.204.263 1.512Z"
      fill={props.prefThemeColor}
    />
  </Svg>
)

export default SvgComponent
