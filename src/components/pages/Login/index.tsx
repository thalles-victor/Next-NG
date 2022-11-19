import Router from "next/router"
import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form"
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

type LoginRequest = {
  userName: string;
  password: string;
}

export function Login() {
  const [authError, setAuthError] = useState(false);

  const { register, handleSubmit } = useForm<LoginRequest>();


  const {
    signIn,
    isAuthenticated,
    user
  } = useContext(AuthContext);


  async function handleSingIn(data: LoginRequest) {
    setAuthError(await signIn(data));

    if (!authError) {
      Router.push("/dashboard")
    }
  }

  return(
    <LoginContainer>
      <div>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit(handleSingIn)}>
          <input
            placeholder="user name"
            {...register("userName")}
          />
          {
            authError? <span>Senha ou usuário inválido</span> : null
          }
          <input
            placeholder="Senha" 
            type="password"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
        </form>

        <button onClick={() => {
          Router.push("/criar-conta")
        }}>Crirar conta</button>
      </div>
    </LoginContainer>
  )
}