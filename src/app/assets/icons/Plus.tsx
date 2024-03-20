import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Plus = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "25"}
    height={height ?? "24"}
    viewBox={`0 0 ${width ?? "25"} ${height ?? "24"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="plus">
      <g id="Icon">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.5 5C13.5 4.44772 13.0523 4 12.5 4C11.9477 4 11.5 4.44772 11.5 5V11H5.5C4.94772 11 4.5 11.4477 4.5 12C4.5 12.5523 4.94772 13 5.5 13H11.5V19C11.5 19.5523 11.9477 20 12.5 20C13.0523 20 13.5 19.5523 13.5 19V13H19.5C20.0523 13 20.5 12.5523 20.5 12C20.5 11.4477 20.0523 11 19.5 11H13.5V5ZM13.5 11H11.5V13H13.5V11Z"
          fill={color ?? "white"}
        />
        <path d="M13.5 11H11.5V13H13.5V11Z" fill={color ?? "white"} />
      </g>
    </g>
  </svg>
);

export default Plus;
