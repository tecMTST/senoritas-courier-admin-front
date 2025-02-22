import styled from "styled-components";

export const Input = styled.div<{
  $variant?: string;
  $width?: string;
  $color?: string;
  $error?: boolean;
}>`
  width: ${(props) => props?.$width ?? "25%"};

  .MuiFormControl-root {
    width: 100%;

    &.mask {
      .MuiInputBase-input {
        border-left: 1px solid #a8b5c2;
        margin: 4px 0;
        padding: 6px 16px !important;
      }

      .MuiTypography-root {
        color: #8593a3;
        font-family: "Public Sans";
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }
    }

    label {
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      color: ${(props) => (!!props?.$color ? props?.$color : "#272727")};
    }

    label:not(.MuiInputLabel-shrink) {
      transform: translate(24px, 10px) scale(1);
    }

    .MuiInputLabel-shrink {
      padding: 1px;
      background: #ffffff;
    }

    .MuiInputBase-multiline {
      display: flex;
      padding: 10px 14px;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;

      .MuiInputBase-inputMultiline {
        font-size: 16px !important;
        line-height: 24px !important;
        padding: 0 !important;
      }

      fieldset {
        border-radius: 8px !important;
      }
    }

    .MuiFilledInput-root {
      background: none;
    }

    ::before {
      border-bottom: 1px solid #8e918e !important;
    }

    ::after {
      border-bottom: 2px solid #8e918e;
    }

    .MuiInputBase-root {
      .MuiInputBase-input {
        padding: ${(props) =>
          props?.$variant === "filled" ? "0 8px 8px 16px" : "12px 16px;"};
        font-family: "Public Sans";

        color: #272727;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }

      .MuiSelect-select {
        padding: 10px 14px;
      }

      fieldset {
        border-radius: 24px;
        border: 1px solid
          ${(props) => (!!props?.$color ? props?.$color : "#c3ccd6")};
      }
    }
  }

  .MuiSvgIcon-root {
    color: #272727;
  }

  &.without-label {
    .MuiFormLabel-root {
      display: none;
    }
  }
`;

export const HelperText = styled.label`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
`;

export const Label = styled.label<{ $variant?: string }>`
  color: ${(props) => (props?.$variant === "filled" ? "#404944" : "#272727")};
  font-family: "Public Sans";
  font-size: ${(props) => (props?.$variant === "filled" ? "13px" : "14px")};
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  margin-bottom: 4px;
  padding: ${(props) =>
    props?.$variant === "filled" ? "8px 0px 0 16px" : "0"};
`;
