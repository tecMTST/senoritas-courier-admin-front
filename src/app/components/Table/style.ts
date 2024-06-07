import styled from "styled-components";

export const Table = styled.div<{ $boldHead?: boolean; $borderHead?: boolean }>`
  & .MuiPagination-ul {
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

    & .Mui-selected {
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

  & .MuiPaper-root {
    background-color: transparent;
    border-radius: 0;
    box-shadow: none;

    & .MuiTableCell-head {
      border-bottom: ${(props) =>
        props?.$borderHead ? "1px solid #C3CCD6" : "none"};
      padding: 24px 16px;
      font-weight: ${(props) => (props?.$boldHead ? "700 !important" : "400")};
    }

    & .MuiTableCell-root {
      color: #505862;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;

      .width-auto {
        width: auto;
      }
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

export const Empty = styled.p`
  padding: 16px;
  color: #505862;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
`;

export const Action = styled.button<{ $type?: string }>`
  padding: 8px 16px;
  color: ${(props) => (props?.$type ? "#00B596" : "#8593A3")};
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
`;
