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
      background: #E6F4EC;
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
        props?.$borderHead ? "border-bottom: 1px solid #C3CCD6" : "none"};
      padding: 24px 16px;
      font-weight: ${(props) => (props?.$boldHead ? "700" : "400")};
    }

    & .MuiTableCell-root {
      color: #505862;
      font-family: "Public Sans";
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
    }
  }
`;

export const Empty = styled.label``;
