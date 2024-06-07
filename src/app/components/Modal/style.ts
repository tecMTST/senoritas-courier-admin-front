import styled from "styled-components";

export const Modal = styled.div`
  padding: 0 40px;
`;

export const Title = styled.div`
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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  & .MuiButtonBase-root {
    padding: 40px 40px 8px 0;
    background-color: transparent !important;
  }

  .content {
    padding: 40px 0 8px 40px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .title {
      color: #00b596;
      font-family: "Public Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .subtitle {
      color: #505862;
      text-align: center;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;

export const Divider = styled.div`
  min-height: 1px;
  background: #c3ccd6;
  width: calc(100% - 40px - 40px);
  display: flex;
  align-self: center;
  margin: 16px 0px;
`;

export const Footer = styled.div`
  display: flex;
  width: calc(100% - 40px);
  justify-content: flex-end;
  padding: 16px 20px;
`;
