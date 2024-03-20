import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Search = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "24"}
    height={height ?? "24"}
    viewBox={`0 0 ${width ?? "24"} ${height ?? "24"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8859 17.2542 14.5977 16.0414 15.8564C16.0072 15.8827 15.9742 15.9115 15.9429 15.9429C15.9115 15.9742 15.8827 16.0072 15.8564 16.0414C14.5977 17.2542 12.8859 18 11 18C7.13401 18 4 14.866 4 11ZM16.6177 18.0319L15.9429 17.3571C15.5837 16.9979 15.5549 16.4335 15.8564 16.0414C15.9192 15.9809 15.9809 15.9192 16.0414 15.8564C16.4335 15.5549 16.9979 15.5837 17.3571 15.9429L18.0319 16.6177C17.6143 17.1397 17.1397 17.6143 16.6177 18.0319ZM16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319Z"
      fill={color ?? "#00B596"}
    />
    <path
      d="M15.9429 17.3571L16.6177 18.0319C17.1397 17.6143 17.6143 17.1397 18.0319 16.6177L17.3571 15.9429C16.9979 15.5837 16.4335 15.5549 16.0414 15.8564C15.9809 15.9192 15.9192 15.9809 15.8564 16.0414C15.5549 16.4335 15.5837 16.9979 15.9429 17.3571Z"
      fill={color ?? "#00B596"}
    />
  </svg>
);

export default Search;
