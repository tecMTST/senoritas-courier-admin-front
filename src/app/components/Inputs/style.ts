import styled from "styled-components";

export const Input = styled.div<{ $error?: boolean }>`
  width: 25%;

  & .MuiFormControl-root {
    width: 100%;

    & label {
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      color: #272727;
    }

    & label:not(.MuiInputLabel-shrink) {
      transform: translate(24px, 10px) scale(1);
    }

    & .MuiInputLabel-shrink {
      padding: 1px;
      background: #ffffff;
    }

    & .MuiInputBase-multiline {
      display: flex;
      padding: 10px 14px;
      align-items: center;
      gap: 8px;
      flex: 1 0 0;

      & .MuiInputBase-inputMultiline {
        font-size: 16px !important;
        line-height: 24px !important;
        padding: 0 !important;
      }

      & fieldset {
        border-radius: 8px !important;
      }
    }

    & .MuiInputBase-root {
      & .MuiInputBase-input {
        padding: 12px 16px;
        font-family: "Public Sans";
        color: #272727;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }

      & .MuiSelect-select {
        padding: 10px 14px;
      }

      & fieldset {
        border-radius: 24px;
        border: 1px solid #c3ccd6;
      }
    }
  }

  .MuiSvgIcon-root {
    color: #272727;
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

export const Label = styled.label`
  color: #272727;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin: 0;
  margin-bottom: 4px;
`;
