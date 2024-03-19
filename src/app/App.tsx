import React from "react";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import Routes from "./routes";

injectStyle();

const App = (): JSX.Element => (
  <>
    <Routes />
    <ToastContainer autoClose={3000} />
  </>
);

export default App;
