import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #c3ccd6;
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
  color: #505862;
  font-family: "Public Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: -0.25px;
  margin-bottom: 24px;
`;

export const Description = styled.label`
  color: #6a7682;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.25px;
`;

export const Value = styled.label`
  color: #00b596;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.25px;
`;
