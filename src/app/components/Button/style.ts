import styled from "styled-components";

export const Button = styled.button<{ $primary?: boolean; $inline?: boolean }>`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 40px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  border: ${(props) =>
    props.$primary || props.$inline ? "none" : "1px solid #00B596"};
  background: ${(props) => (props.$primary ? "#00B596" : "none")};
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#00B596")};
  text-decoration-line: ${(props) => (props.$inline ? "underline" : "none")};

  span {
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    width: max-content;
  }
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
`;
