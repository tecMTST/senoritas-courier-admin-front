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
  height: calc(100vh - 102px - 124px - 164px);
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
