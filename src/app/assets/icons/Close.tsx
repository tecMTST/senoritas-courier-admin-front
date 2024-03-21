import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Close = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox={`0 0 ${width ?? "24"} ${height ?? "24"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke={color ?? "#00B596"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Close;
