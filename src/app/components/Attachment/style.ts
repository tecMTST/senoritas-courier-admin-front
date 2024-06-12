import styled from "styled-components";

export const Attachment = styled.button`
  cursor: pointer;
  background: transparent;
  border-radius: 50%;
  border: 1px dashed #00b596;
  padding: 8px;
  width: 108px;
  height: 96px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.with-value {
    padding: 0;
    border: none;
    width: 96px;
    height: 96px;
  }

  img {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
  }

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
