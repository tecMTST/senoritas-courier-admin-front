import React from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { AuthProvider } from "./auth";
import Routes from "./routes";
import * as S from "./utils/style";
import "./utils/style.css";

injectStyle();

const App = (): JSX.Element => (
  <>
    <AuthProvider>
      <S.Main>
        <Routes />
      </S.Main>
    </AuthProvider>
    <ToastContainer autoClose={3000} />
  </>
);

export default App;
