import Router from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import { recoverUserInformation, signInRequest } from "../services/auth";
import { setCookie, parseCookies } from "nookies";
import { api } from "../services/api";

type User = {
  name: string;
  userName: string;
  avatar: string;
}

type SignInData = {
  userName: string;
  password: string
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);


export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { gncashauth_token: token } = parseCookies();

    if (token) {
      recoverUserInformation()
        .then(response => setUser(response.user))
    }
  }, [])

  async function signIn({
    userName,
    password,
  }: SignInData) {
    const { token, user } = await signInRequest({
      userName,
      password
    })
    
    setCookie(undefined, "gncashauth_token", token, {
      maxAge: 60 * 60 * 24 // 24h
    });

    api.defaults.headers["authorization"] = `Bearer ${token}`

    setUser(user);

    Router.push("/dashboard");
  }

  return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      { children }
    </AuthContext.Provider>
  )
}