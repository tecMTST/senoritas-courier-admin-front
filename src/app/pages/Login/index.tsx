import React, { ChangeEvent, memo, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../auth";
import Button from "../../components/Button";
import TextField from "../../components/Inputs/textField";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import * as S from "../style";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  const { signIn } = useAuth();

  const login = useCallback(async () => {
    const success = await signIn(email, password);

    if (success) history.push("/entregas-avulsas");
    else setError("Ops! Verifique seu e-mail e/ou senha.");
  }, [email, history, password, signIn]);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      login();
    }
  });

  return (
    <>
      <Header />
      <S.Login>
        <TextField
          required
          id="email"
          text="E-mail"
          value={email ?? ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          error={!!error}
        />
        <TextField
          required
          type="password"
          id="password"
          text="Senha"
          value={password ?? ""}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          error={!!error}
        />
        {!!error && <S.ErrorText>{error}</S.ErrorText>}
        <Button primary text="Entrar" onClick={login} />
      </S.Login>
      <Footer />
    </>
  );
};

export default memo(Login);
