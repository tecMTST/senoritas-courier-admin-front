import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;

export const Container = styled.div`
  position: absolute;
  top: 102px;
  left: 180px;
  padding: 48px 32px;
  width: calc(100% - 180px - 64px);

  .space-between {
    justify-content: space-between;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px 0;
  gap: 16px;
`;

export const Header = styled.header`
  width: 100%;
  padding: 24px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 2px solid #1a202c;
  position: fixed;
`;

export const HeaderLogo = styled.div`
  margin-left: 104px;
  align-self: center;
  color: #00b596;
`;

export const HeaderItems = styled.div`
  display: flex;
  gap: 32px;
  margin-right: 104px;
`;

export const HeaderTab = styled.button<{ $selected?: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 12px 0px;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  border-bottom: ${(props) => (props.$selected ? "2px solid #00b596" : "none")};
  color: ${(props) => (props.$selected ? "#00b596" : "#717d96")};

  label {
    cursor: pointer;
  }
`;

export const HeaderButton = styled.button<{ $type?: "primary" | "secondary" }>`
  display: flex;
  cursor: pointer;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: ${(props) => (props.$type === "primary" ? "#00b596" : "none")};
  border: ${(props) =>
    props.$type === "primary" ? "none" : "2px solid #00b596;"};
  label {
    cursor: pointer;
    color: ${(props) => (props.$type === "primary" ? "#ffffff" : "#00b596")};
  }
`;

export const Menu = styled.div`
  background: #edf0f7;
  overflow: auto;
  display: flex;
  top: 102px;
  position: fixed;
  max-height: calc(100% - 102px - 124px);
  flex-direction: column;
  border-right: 2px solid #00b596;
`;

export const MenuTop = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
`;

export const MenuBottom = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #00b596;
`;

export const MenuItem = styled.button<{ $selected?: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  align-items: center;
  gap: 10px;
  background: ${(props) => (props.$selected ? "#E2E7F0" : "none")};
  border: none;

  label {
    cursor: pointer;
    color: ${(props) => (props.$selected ? "#00B596" : "#717d96")};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const Footer = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  background: #1a202c;
  position: fixed;
  bottom: 0px;
  width: 100%;
  align-items: center;
`;

export const FooterLogo = styled.div`
  margin-left: 104px;
  color: #00b596;
  align-self: baseline;
`;

export const FooterItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 104px - 104px);

  label {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: 32px;
`;

export const FooterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  label {
    cursor: pointer;
    color: #a0abc0;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Label = styled.label`
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const Button = styled.button<{ $primary?: boolean }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 40px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  border: ${(props) => (props.$primary ? "none" : "1px solid #00B596")};
  background: ${(props) => (props.$primary ? "#00B596" : "none")};
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#00B596")};

  span {
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`;

export const IconButton = styled.div`
  align-items: center;
  display: flex;
`;

export const Title = styled.span`
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #00b596;
  border-bottom: 1px solid #00b596;
  padding-bottom: 8px;
  display: flex;
`;

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

    & .MuiInputBase-root {
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

export const HelperText = styled.p`
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

export const Modal = styled.div`
  width: calc(100% - 40px);
  padding: 16px 20px;
`;

export const HeaderModal = styled.div`
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
  }
`;

export const DividerModal = styled.div`
  height: 1px;
  background: #c3ccd6;
  width: 75%;
  display: flex;
  align-self: center;
`;

export const FooterModal = styled.div`
  display: flex;
  width: calc(100% - 40px);
  justify-content: flex-end;
  padding: 16px 20px;
`;
