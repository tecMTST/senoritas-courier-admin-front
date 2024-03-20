import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ArrowLeft = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox={`0 0 ${width ?? "24"} ${height ?? "24"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5"
      stroke={color ?? "#00B596"}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke={color ?? "#00B596"}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ArrowLeft;
