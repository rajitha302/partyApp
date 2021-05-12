import React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

export default function headerBg(props) {
  return (
    <Svg
      width={"100%"}
      height={387}
      viewBox="0 0 414 387"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M0 0h414v287c0 55.228-44.772 100-100 100H100C44.772 387 0 342.228 0 287V0z"
        fill="#377AFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M376.582 1.464v302.801c0 12.97-2.33 25.397-6.593 36.884-14.97-31.86-33.72-63.96-52.89-96.778C272.892 168.689 226.453 89.188 219 0l157.582 1.464z"
        fill="#407CFF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M376.582 1.464v302.801c0 12.97-2.33 25.397-6.593 36.884-14.97-31.86-33.72-63.96-52.89-96.778C272.892 168.689 226.453 89.188 219 0l157.582 1.464z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M377.248 364.374c22.371-18.339 36.645-46.19 36.645-77.374V0H258.061c10.563 95.13 52.165 196.965 86.463 280.922 12.495 30.586 24.021 58.8 32.724 83.452z"
        fill="#4980FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M377.248 364.374c22.371-18.339 36.645-46.19 36.645-77.374V0H258.061c10.563 95.13 52.165 196.965 86.463 280.922 12.495 30.586 24.021 58.8 32.724 83.452z"
        fill="url(#prefix__paint1_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={-218}
          y1={439.696}
          x2={354.285}
          y2={255.607}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear"
          x1={-518.136}
          y1={632.879}
          x2={399.219}
          y2={363.704}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
