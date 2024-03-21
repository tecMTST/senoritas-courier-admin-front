import styled from "styled-components";

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

export const Logo = styled.div`
  margin-left: 104px;
  color: #00b596;
  align-self: baseline;
`;

export const Items = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 104px - 104px);

  label {
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 32px;
`;

export const Button = styled.button`
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
