import * as React from "react"
import Svg, { Path, Circle, Mask, G } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={100}
    height={109}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M100 8a8 8 0 0 0-8-8H8a8 8 0 0 0-8 8v24a8 8 0 0 0 8 8c4.418 0 7.903 3.632 8.93 7.93C20.502 62.882 33.953 74 50 74s29.498-11.117 33.07-26.07C84.097 43.631 87.582 40 92 40a8 8 0 0 0 8-8V8Z"
      fill="#5177FF"
    />
    <Circle cx={50} cy={40} r={32} fill="#FFD645" />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={18}
      y={8}
      width={64}
      height={64}
    >
      <Circle cx={50} cy={40} r={32} fill="#FFD600" />
    </Mask>
    <G mask="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 27a7.503 7.503 0 0 1 7.35 6h-14.7A7.503 7.503 0 0 1 50 27Zm-7 7.5h-2c0-.511.043-1.012.124-1.5.715-4.257 4.416-7.5 8.876-7.5 4.46 0 8.161 3.243 8.876 7.5.081.488.124.989.124 1.5h-2v11h2V47h-1.836L61 82H39l3.836-35H41v-1.5h2v-11Zm1.5 0v11h11v-11h-11Zm9 46h5.827L55.655 47h-11.31l-3.672 33.5H46.5v-5a3.5 3.5 0 1 1 7 0v5Zm-1.5 0v-5a2 2 0 1 0-4 0v5h4Zm-2-38a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        fill="#5177FF"
      />
    </G>
  </Svg>
)

export default SvgComponent
