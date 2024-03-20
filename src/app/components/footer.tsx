import React, { memo } from "react";
import * as S from "../App.style";

const Footer = (): JSX.Element => (
  <S.Footer>
    <S.FooterLogo>LOGO</S.FooterLogo>
    <S.FooterItems>
      <S.Label>Copyright 2022 Company Name</S.Label>
      <S.FooterButtons>
        <S.FooterButton>
          <S.Label>Privacy Policy</S.Label>
        </S.FooterButton>
        <S.FooterButton>
          <S.Label>Terms & Conditions</S.Label>
        </S.FooterButton>
        <S.FooterButton>
          <S.Label>Cookie Policy</S.Label>
        </S.FooterButton>
        <S.FooterButton>
          <S.Label>Contact</S.Label>
        </S.FooterButton>
      </S.FooterButtons>
    </S.FooterItems>
  </S.Footer>
);

export default memo(Footer);
