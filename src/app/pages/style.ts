import styled from "styled-components";

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
  padding: 16px 0;
  gap: 16px;

  &.margin-bottom-40 {
    margin-bottom: 40px;
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
