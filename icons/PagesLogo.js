import React from "react";
import Svg, { Path, Circle, Mask, G } from "react-native-svg";

export default (props) => (
  <Svg
    width={132}
    height={122}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M66 0H6a6 6 0 0 0-6 6v28a6 6 0 0 0 6 6h14c3.314 0 5.953 2.702 6.444 5.98C29.33 65.233 45.94 80 66 80c20.06 0 36.67-14.766 39.556-34.02.491-3.278 3.13-5.98 6.444-5.98h14a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6H66Z"
      fill="#5177FF"
    />
    <Circle cx={66} cy={40} r={38} fill="#FFD645" />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={28}
      y={2}
      width={76}
      height={76}
    >
      <Circle cx={66} cy={40} r={38} fill="#FFD600" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66 24.563a8.91 8.91 0 0 1 8.728 7.125H57.272A8.91 8.91 0 0 1 66 24.563Zm-8.313 8.906h-2.374c0-.607.05-1.202.147-1.782.848-5.054 5.244-8.906 10.54-8.906 5.296 0 9.692 3.852 10.54 8.907.097.579.147 1.174.147 1.78h-2.374v13.063h2.374v1.782h-2.18l4.555 41.562H52.938l4.555-41.563h-2.18v-1.78h2.376V33.468Zm1.782 0V46.53H72.53V33.47H59.47Zm10.687 54.625h6.92l-4.36-39.781H59.284l-4.36 39.78h6.92v-5.937a4.156 4.156 0 0 1 8.312 0v5.938Zm-1.781 0v-5.938a2.375 2.375 0 0 0-4.75 0v5.938h4.75ZM66 42.969a2.969 2.969 0 1 0 0-5.938 2.969 2.969 0 0 0 0 5.938Zm0 1.781a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Z"
        fill="#5177FF"
      />
    </G>
  </Svg>
);
