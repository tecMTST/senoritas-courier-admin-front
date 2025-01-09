import styled from "styled-components";

export const Loading = styled.div`
  background-color: black;
  margin: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  position: fixed;
  z-index: 5000;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & .MuiCircularProgress-circle {
    stroke: #00b596;
  }
`;
