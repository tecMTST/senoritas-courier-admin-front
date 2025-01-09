import styled from "styled-components";

export const Table = styled.div<{ $boldHead?: boolean; $borderHead?: boolean }>`
  .MuiPagination-ul {
    margin-top: 20px;
    margin-bottom: 48px;
    justify-content: center;

    button {
      color: #8593a3;
      text-align: center;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }

    .Mui-selected {
      color: #00b596;
      background: #e6f4ec;
      text-align: center;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }

  .MuiPaper-root {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;

    .MuiTableCell-head {
      border-bottom: ${(props) =>
        props?.$borderHead ? "1px solid #C3CCD6" : "none"};
      padding: 12px 8px;
      font-weight: ${(props) => (props?.$boldHead ? "700 !important" : "400")};
    }

    .MuiTableCell-root {
      color: #505862;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      padding: 8px;
    }
  }
`;

export const HeadCel = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    height: 17px;
  }
`;

export const Empty = styled.tr`
  display: flex;
  padding: 8px;
  color: #505862;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const Action = styled.button<{ $type?: string }>`
  padding: 8px 16px;
  color: ${(props) => (props?.$type === "primary" ? "#00B596" : "#8593A3")};
  background: none;
  border: none;
  cursor: pointer;
  text-align: center;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
  text-decoration-line: underline;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 4px;
  }
`;
