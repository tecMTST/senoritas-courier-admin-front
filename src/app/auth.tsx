import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { useHistory } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { api, login } from "./services/api";

interface Props {
  children: ReactNode;
}

interface IAuthContext {
  isValidToken: (token?: string) => boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const history = useHistory();

  const isValidToken = useCallback((token?: string) => {
    const accessToken = token ?? localStorage.getItem("@SESSION:token");

    if (!accessToken)
      return false
    
    try {
      const decoded = jwtDecode(accessToken);
      if (!decoded || !decoded?.exp || decoded?.exp * 1000 < Date.now())
        return false
    } catch {
      return false
    }

    api.defaults.headers.authorization = `Bearer ${accessToken}`;
    return true;
  }, []);

  const signIn = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      const response = await login({ email, password });
      const { accessToken, refreshToken } = response;

      if (accessToken && isValidToken(accessToken)) {
        api.defaults.headers.authorization = `Bearer ${accessToken}`;
        localStorage.setItem("@SESSION:token", accessToken);

        if (refreshToken)
          localStorage.setItem("@SESSION:refreshToken", accessToken);

        return true;
      }

      return false;
    },
    [isValidToken]
  );

  const signOut = useCallback(() => {
    api.defaults.headers.authorization = '';
    localStorage.clear();
    history.push("/");
  }, [history]);

  const value = useMemo(
    () => ({
      signIn,
      signOut,
      isValidToken,
    }),
    [signIn, signOut, isValidToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useAuth must be used within a AuthProvider");

  return context;
};
