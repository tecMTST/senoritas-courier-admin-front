import React from "react";

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

const Edit = ({ width, height, color }: Props): JSX.Element => (
  <svg
    width={width ?? "16"}
    height={height ?? "17"}
    viewBox={`0 0 ${width ?? "16"} ${height ?? "17"}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="edit">
      <g id="Icon">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.25241 3.08569C1.62749 2.71062 2.13619 2.49991 2.66663 2.49991H7.33329C7.70148 2.49991 7.99996 2.79838 7.99996 3.16657C7.99996 3.53476 7.70148 3.83324 7.33329 3.83324H2.66663C2.48981 3.83324 2.32025 3.90348 2.19522 4.0285C2.0702 4.15353 1.99996 4.3231 1.99996 4.49991V13.8332C1.99996 14.0101 2.0702 14.1796 2.19522 14.3046C2.32025 14.4297 2.48982 14.4999 2.66663 14.4999H12C12.1768 14.4999 12.3463 14.4297 12.4714 14.3046C12.5964 14.1796 12.6666 14.0101 12.6666 13.8332V9.16657C12.6666 8.79838 12.9651 8.49991 13.3333 8.49991C13.7015 8.49991 14 8.79838 14 9.16657V13.8332C14 14.3637 13.7892 14.8724 13.4142 15.2475C13.0391 15.6225 12.5304 15.8332 12 15.8332H2.66663C2.13619 15.8332 1.62748 15.6225 1.25241 15.2475C0.87734 14.8724 0.666626 14.3637 0.666626 13.8332V4.49991C0.666626 3.96947 0.87734 3.46077 1.25241 3.08569Z"
          fill={color ?? "#00B596"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.3333 2.41903C13.135 2.41903 12.9449 2.49779 12.8047 2.63798L6.60194 8.84074L6.24954 10.2503L7.65913 9.89793L13.8619 3.69517C14.0021 3.55498 14.0808 3.36484 14.0808 3.16657C14.0808 2.96831 14.0021 2.77817 13.8619 2.63798C13.7217 2.49779 13.5316 2.41903 13.3333 2.41903ZM11.8619 1.69517C12.2521 1.30493 12.7814 1.08569 13.3333 1.08569C13.8852 1.08569 14.4145 1.30493 14.8047 1.69517C15.1949 2.08541 15.4142 2.61469 15.4142 3.16657C15.4142 3.71846 15.1949 4.24774 14.8047 4.63798L8.47136 10.9713C8.38592 11.0568 8.27887 11.1174 8.16165 11.1467L5.49498 11.8133C5.2678 11.8701 5.02748 11.8036 4.86189 11.638C4.6963 11.4724 4.62974 11.2321 4.68653 11.0049L5.3532 8.33822C5.3825 8.22099 5.44312 8.11394 5.52855 8.0285L11.8619 1.69517Z"
          fill={color ?? "#00B596"}
        />
      </g>
    </g>
  </svg>
);

export default Edit;
