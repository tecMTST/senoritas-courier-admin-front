import styled from "styled-components";

export const Menu = styled.div`
  background: #edf0f7;
  overflow: auto;
  display: flex;
  top: 98px;
  position: fixed;
  max-height: calc(100% - 102px - 124px);
  flex-direction: column;
  border-right: 2px solid #00b596;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
`;

export const Item = styled.button<{ $selected?: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 12px 24px;
  align-items: center;
  gap: 12px;
  background: ${(props) => (props.$selected ? "#E2E7F0" : "none")};
  border: none;

  label {
    cursor: pointer;
    color: ${(props) => (props.$selected ? "#00B596" : "#717d96")};
    font-size: 14px;
    font-weight: 500;
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
