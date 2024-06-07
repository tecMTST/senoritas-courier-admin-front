import React, { memo } from "react";
import Logo from "../../assets/images/logo.svg";
import * as S from "./style";

const Header = (): JSX.Element => (
  <S.Header>
    <img src={Logo} alt="logo" />
  </S.Header>
);

export default memo(Header);
