import styled from "styled-components";

export const Title = styled.label`
  color: #272727;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.25px;
  margin-top: 32px;
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

export const Value = styled.label`
  color: #00b596;
  font-family: "Public Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: auto;
`;

export const Row = styled.div<{
  $gap?: number;
  $alignItems?: string;
}>`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => props?.$alignItems ?? "center"};
  gap: ${(props) => (props?.$gap ? `${props?.$gap}px` : "4px")};
  width: auto;
  padding: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const Divider = styled.div`
  min-height: 1px;
  background: #c3ccd6;
  display: flex;
  margin: 8x 0;
  width: 100%};
`;
