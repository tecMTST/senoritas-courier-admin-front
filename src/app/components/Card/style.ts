import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 296px;
  padding: 32px 24px 48px 24px;
  flex-direction: column;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.div`
  width: inherit;

  img {
    width: inherit;
    height: 140px;
    object-fit: cover;
  }
`;

export const Title = styled.label`
  color: #00b596;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 12px 0;
`;

export const Description = styled.label`
  color: #717d96;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 2px 0;
`;

export const Status = styled.label`
  color: #717d96;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 2px 0;
`;
