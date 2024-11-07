import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Delete = ({ width, height, color }: Props): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? "24"}
    height={height ?? "24"}
    fill="none"
    viewBox={`0 0 ${width ?? "24"} ${height ?? "24"}`}
  >
    <path
      fill={color ?? "red"}
      d="M14.667 3H9.333c-.98 0-1.777.807-1.777 1.8v.9H4v1.8h1.778v11.7c0 .993.797 1.8 1.778 1.8h8.888c.98 0 1.778-.807 1.778-1.8V7.5H20V5.7h-3.556v-.9c0-.993-.797-1.8-1.777-1.8zM9.333 4.8h5.334v.9H9.333v-.9zm7.111 14.4H7.556V7.5h8.888v11.7z"
    />
    <path
      fill={color ?? "red"}
      d="M9.333 9.3h1.778v8.1H9.333V9.3zM12.889 9.3h1.778v8.1h-1.778V9.3z"
    />
  </svg>
);

export default Delete;
