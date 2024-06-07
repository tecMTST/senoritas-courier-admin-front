import styled from "styled-components";

export const Title = styled.label`
  color: #00b596;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const Subtitle = styled.label`
  color: #505862;
  text-align: center;
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 150% */
  letter-spacing: -0.25px;
`;

export const Text = styled.label<{ $bold?: boolean; $title?: boolean }>`
  color: ${(props) => (props?.$title ? "#272727" : "#505862")};
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: ${(props) => (props?.$bold ? "700" : "400")};
  line-height: 21px;
  letter-spacing: -0.25px;
  text-wrap: pretty;
`;

export const Column = styled.div<{
  $gap?: number;
  $width?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props?.$gap ? `${props?.$gap}px` : "4px")};
  width: ${(props) => props?.$width ?? "auto"};
`;

export const Row = styled.div<{
  $gap?: number;
  $width?: string;
  $padding?: string;
  $justifyContent?: string;
  $alignItems?: string;
}>`
  display: flex;
  justify-content: ${(props) => props?.$justifyContent ?? "space-between"};
  align-items: ${(props) => props?.$alignItems ?? "center"};
  gap: ${(props) => (props?.$gap ? `${props?.$gap}px` : "4px")};
  width: ${(props) => props?.$width ?? "auto"};
  padding: ${(props) => props?.$padding ?? "0"};
`;

export const Container = styled.div<{
  $padding?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: ${(props) => props?.$padding ?? "0"};

  button:not(.has-icon) {
    padding: 8px 0;

  }
`;

export const Divider = styled.div<{
  $margin?: string;
  $width?: string;
}>`
  min-height: 1px;
  background: #c3ccd6;
  display: flex;
  margin: ${(props) => props?.$margin ?? "16px 0"};
  width: ${(props) => props?.$width ?? "auto"};
`;
