import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { jwtDecode } from "jwt-decode";
import { api, login } from "./services/api";

interface Props {
  children: ReactNode;
}

interface IAuthContext {
  isValidToken: (token: string) => boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const isValidToken = useCallback((token: string) => {
    if (!!token) {
      const decoded = jwtDecode(token);
      console.log(decoded?.exp && decoded?.exp < Date.now() / 1000);

      //   try {
      //     if (
      //       !decoded ||
      //       decoded.exp ||
      //       (decoded?.exp && decoded?.exp < Date.now() / 1000)
      //     )
      //       return false;
      //   } catch {
      //     return false;
      //   }
    } else return false;

    api.defaults.headers.authorization = `Bearer ${token}`;
    return true;
  }, []);

  const signIn = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      const response = await login({ email, password });
      const { accessToken, refreshToken } = response;

      if (accessToken && isValidToken(accessToken)) {
        api.defaults.headers.authorization = `Bearer ${accessToken}`;
        sessionStorage.setItem("@SESSION:token", accessToken);

        if (refreshToken)
          sessionStorage.setItem("@SESSION:refreshToken", accessToken);

        return true;
      }

      return false;
    },
    [isValidToken]
  );

  const signOut = useCallback(() => sessionStorage.clear(), []);

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
