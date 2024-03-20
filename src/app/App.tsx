import React from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Routes from "./routes";
import * as S from "./App.style";
import "./style.css";

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
