import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const ChevronDown = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "16"}
    height={height ?? "17"}
    viewBox={`0 0 ${width ?? "16"} ${height ?? "17"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="chevron-down">
      <path
        id="Icon"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.52876 6.02859C3.78911 5.76824 4.21122 5.76824 4.47157 6.02859L8.00016 9.55719L11.5288 6.02859C11.7891 5.76824 12.2112 5.76824 12.4716 6.02859C12.7319 6.28894 12.7319 6.71105 12.4716 6.9714L8.47157 10.9714C8.21122 11.2317 7.78911 11.2317 7.52876 10.9714L3.52876 6.9714C3.26841 6.71105 3.26841 6.28894 3.52876 6.02859Z"
        fill={color ?? "#8593A3"}
      />
    </g>
  </svg>
);

export default ChevronDown;
