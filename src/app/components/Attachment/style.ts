import styled from "styled-components";

export const Attachment = styled.button`
  cursor: pointer;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  border-radius: 8px;
  border: 1px dashed #00b596;
  padding: 8px;

  input {
    display: none;
  }

  label {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  color: #00b596;
  text-align: center;
  font-family: "Public Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;
`;
