import React, { ReactNode } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import * as S from "../../utils/style";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    <Menu />
    <S.Container>{children}</S.Container>
    <Footer />
  </>
);

export default Layout;
