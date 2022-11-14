import React from "react";
import Svg, { Path } from "react-native-svg";

export default (props) => (
  <Svg
    width={11}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style}
  >
    <Path
      d="M9.968 9.712a.655.655 0 0 0-.212-.483l-5.8-5.684a.68.68 0 0 0-.484-.19.655.655 0 0 0-.667.666c0 .183.073.352.19.476l5.333 5.215-5.332 5.215a.682.682 0 0 0-.19.476c0 .38.292.666.666.666.19 0 .351-.066.483-.197l5.8-5.677c.14-.139.213-.3.213-.483Z"
      fill={props.prefthemecolor}
    />
  </Svg>
);
