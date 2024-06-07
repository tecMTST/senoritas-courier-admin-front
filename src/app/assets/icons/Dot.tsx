import React from "react";

interface Props {
  color?: string;
}

const Dot = ({ color }: Props): JSX.Element => (
  <svg
    style={{ marginRight: "8px" }}
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <circle cx="5" cy="5" r="4" fill={color ?? "#272727"} />
  </svg>
);

export default Dot;
