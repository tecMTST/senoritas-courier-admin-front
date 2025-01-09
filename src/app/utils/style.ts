import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
`;

export const Container = styled.div`
  position: absolute;
  top: 74px;
  left: 172px;
  padding: 12px;
  width: calc(100% - 196px);
  height: calc(100vh - 74px - 148px);
  overflow: auto;

  .width-auto {
    width: auto;
  }

  .margin-top-48 {
    margin-top: 48px;
  }

  .end {
    justify-content: end;
  }

  .space-between {
    justify-content: space-between;
  }

  .baseline {
    align-items: baseline;
  }
`;
