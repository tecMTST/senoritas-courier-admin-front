import React, { memo } from "react";
import * as S from "./style";

const Footer = (): JSX.Element => (
  <S.Footer>
    <S.Logo>LOGO</S.Logo>
    <S.Items>
      <S.Label>Copyright 2022 Company Name</S.Label>
      <S.Buttons>
        <S.Button>
          <S.Label>Privacy Policy</S.Label>
        </S.Button>
        <S.Button>
          <S.Label>Terms & Conditions</S.Label>
        </S.Button>
        <S.Button>
          <S.Label>Cookie Policy</S.Label>
        </S.Button>
        <S.Button>
          <S.Label>Contact</S.Label>
        </S.Button>
      </S.Buttons>
    </S.Items>
  </S.Footer>
);

export default memo(Footer);
