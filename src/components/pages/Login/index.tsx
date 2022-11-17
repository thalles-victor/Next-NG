import { LoginContainer } from "./styles";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

type LoginRequest = {
  userName: string;
  password: string;
}

export function Login() {
  const { register, handleSubmit } = useForm<LoginRequest>();
  const {
    signIn,
    isAuthenticated,
    user
  } = useContext(AuthContext);


  async function handleSingIn(data: LoginRequest) {
    await signIn(data);
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
          <input
            placeholder="Senha" 
            type="password"
            {...register("password")}
          />
          <button type="submit">Entrar</button>
        </form>

        <button>recuperar senha</button>
        <button>Crirar conta</button>
      </div>
    </LoginContainer>
  )
}