import React from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Routes from "./routes";
import * as S from "./utils/style";
import "./utils/style.css";

injectStyle();

const App = (): JSX.Element => (
  <>
    <S.Main>
      <Header />
      <Menu />
      <S.Container>
        <Routes />
      </S.Container>
      <Footer />
    </S.Main>
    <ToastContainer autoClose={3000} />
  </>
);

export default App;
