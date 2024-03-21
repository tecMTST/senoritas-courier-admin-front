import styled from "styled-components";

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

export const Logo = styled.div`
  margin-left: 104px;
  align-self: center;
  color: #00b596;
`;

export const Items = styled.div`
  display: flex;
  gap: 32px;
  margin-right: 104px;
`;

export const Tab = styled.button<{ $selected?: boolean }>`
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

export const Button = styled.button<{ $type?: "primary" | "secondary" }>`
  display: flex;
  cursor: pointer;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: ${(props) => (props.$type === "primary" ? "#00b596" : "none")};
  border: ${(props) =>
    props.$type === "primary" ? "none" : "2px solid #00b596;"};
  label {
    cursor: pointer;
    color: ${(props) => (props.$type === "primary" ? "#ffffff" : "#00b596")};
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
