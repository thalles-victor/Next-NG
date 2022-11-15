import { LoginContainer } from "./styles";

export function Login() {
  return(
    <LoginContainer>

    
      <div>
        <h1>Entrar</h1>
        <form action="">
          <input placeholder="Nome do usuário" />
          <input
            placeholder="Senha" 
            type="password"
          />
          <button>Entrar</button>
        </form>

        <button>recuperar senha</button>
        <button>Crirar conta</button>
      </div>
    </LoginContainer>
  )
}