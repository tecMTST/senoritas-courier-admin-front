import styled from "styled-components";

export const Modal = styled.div`
  width: calc(100% - 40px);
  padding: 16px 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & .MuiDialogTitle-root {
    padding: 32px 40px;
    color: #00b596;
    font-family: "Public Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  & .MuiButtonBase-root {
    padding: 32px 40px;
    background-color: transparent !important;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background: #c3ccd6;
  width: 75%;
  display: flex;
  align-self: center;
`;

export const Footer = styled.div`
  display: flex;
  width: calc(100% - 40px);
  justify-content: flex-end;
  padding: 16px 20px;
`;
