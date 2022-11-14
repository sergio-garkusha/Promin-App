import React from "react";
import Svg, { Path, Mask, Circle, G } from "react-native-svg";

export default (props) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={props.style}
  >
    <Path
      d="M16.607 14.671c-4.408 0-7.155-2.648-7.155-6.922 0-1.204.207-2.283.514-2.873.141-.273.175-.431.175-.63a.717.717 0 0 0-.714-.706c-.1 0-.29.033-.548.133-3.113 1.262-5.28 4.507-5.28 8.018 0 5.047 3.678 8.733 8.725 8.733 3.602 0 6.574-1.926 7.935-5.047a1.61 1.61 0 0 0 .141-.59.663.663 0 0 0-.655-.68c-.166 0-.316.025-.556.124-.64.266-1.628.44-2.582.44Zm-11.414-3.03c0-2.357 1.187-4.648 3.121-5.943a7.052 7.052 0 0 0-.348 2.241c0 5.122 3.146 8.193 8.375 8.193.714 0 1.328-.083 1.91-.29-1.212 1.867-3.454 2.996-5.878 2.996-4.15 0-7.18-3.038-7.18-7.196Z"
      fill={props.prefthemecolor}
    />
    <Mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={11}
      y={3}
      width={10}
      height={10}
    >
      <Circle cx={16} cy={8} r={5} fill="#D9D9D9" />
    </Mask>
    <G mask="url(#a)">
      <Path
        d="M12.83 3.59A.845.845 0 0 0 12 2.75a.847.847 0 0 0-.838.839v1.693c0 .448.381.83.838.83.448 0 .83-.382.83-.83V3.59Zm3.32 3.096a.834.834 0 0 0 .009 1.17.837.837 0 0 0 1.178-.008l1.196-1.195a.855.855 0 0 0 0-1.187.842.842 0 0 0-1.17.008L16.15 6.686Zm-4.158 9.687c2.382 0 4.358-1.976 4.358-4.366 0-2.39-1.976-4.366-4.358-4.366-2.383 0-4.358 1.975-4.358 4.366 0 2.39 1.975 4.366 4.358 4.366Zm0-1.544a2.841 2.841 0 0 1-2.823-2.822 2.841 2.841 0 0 1 2.823-2.822 2.841 2.841 0 0 1 2.822 2.822 2.841 2.841 0 0 1-2.822 2.822Zm8.408-1.992c.449 0 .83-.382.83-.83a.838.838 0 0 0-.83-.83h-1.685a.838.838 0 0 0-.83.83c0 .448.382.83.83.83H20.4Z"
        fill={props.prefthemecolor}
      />
    </G>
    <Path
      d="M12.83 3.59A.845.845 0 0 0 12 2.75a.847.847 0 0 0-.838.839v1.693c0 .448.381.83.838.83.448 0 .83-.382.83-.83V3.59Zm3.32 3.096a.834.834 0 0 0 .009 1.17.837.837 0 0 0 1.178-.008l1.196-1.195a.855.855 0 0 0 0-1.187.842.842 0 0 0-1.17.008L16.15 6.686Zm4.25 6.15c.449 0 .83-.38.83-.83a.838.838 0 0 0-.83-.83h-1.685a.838.838 0 0 0-.83.83c0 .45.382.83.83.83H20.4Z"
      fill={props.prefthemecolor}
    />
  </Svg>
);
