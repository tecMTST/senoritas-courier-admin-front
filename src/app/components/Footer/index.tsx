import React, { memo } from "react";
import Logo from "../../assets/images/logo.svg";
import * as S from "./style";

const Footer = (): JSX.Element => (
  <S.Footer>
    <img src={Logo} alt="logo" />

    <S.Label>© 2024 Señoritas Courier. Todos os direitos reservados.</S.Label>
  </S.Footer>
);

export default memo(Footer);
