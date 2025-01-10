import styled from "styled-components";

export const Login = styled.div`
  position: absolute;
  max-height: calc(100vh - 98px - 126px);
  overflow: auto;
  width: 100%;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  button {
    width: 25%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  .margin-top-48 {
    margin-top: 48px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px 0;
  gap: 12px;

  &.margin-bottom-40 {
    margin-bottom: 40px;
  }

  &.center {
    align-items: center;
  }
`;

export const Path = styled.div`
  display: flex;
  gap: 4px;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.25px;

  .first {
    color: #717d96;
    font-weight: 400;
  }

  .last {
    color: #00b596;
    font-weight: 600;
  }
`;

export const Title = styled.label`
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #00b596;
  padding-bottom: 8px;
  display: flex;
`;

export const Empty = styled.label`
  color: #00b596;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const Info = styled.label`
  color: #717d96;
  text-align: center;
  font-feature-settings: "calt" off;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.16px;
`;

export const Text = styled.label`
  color: #272727;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const ErrorText = styled.label`
  color: #c30010;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  text-align: left;
  margin-top: 3px;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 0;
`;
