import Router from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { ApresentatonMessage, ButtonsContainer, ButtonToDashboard, ButtonAccout, HomeContainer } from "./styles"

export function Home() {
  const { isAuthenticated }  = useContext(AuthContext);

  return(
    <HomeContainer>
      <ApresentatonMessage>
        <h2>Nessa nova geração precisamos cada vez mais de tempo</h2>
        <h2>Com a <strong> NG </strong> Cash  você pode realizar suas transações {/*Colocar um icone de um cartão ou imagen de uma maquina de transação*/} </h2>
        <h2>Venha juntar a nossa família de NG Cash De forma rápído, fácil e segura {/* Colocar a foto de uma FAMÍLIA usando cartão */} </h2>
      </ApresentatonMessage>
      
      { isAuthenticated?
        <div>
          <ButtonToDashboard onClick={() => {
            Router.push("/dashboard")
          }}>
            Acessar a dashboard
          </ButtonToDashboard>
        </div>
        :
        <ButtonsContainer>
          <ButtonAccout onClick={() => {
            Router.push("/login")
          }}>
            Logar
          </ButtonAccout>

          <ButtonAccout onClick={() => {
            Router.push("/criar-conta")
          }}>
            Criar conta
          </ButtonAccout>
      </ButtonsContainer>
      }

      <p>Conheça o nosso <a href="https://ng.cash/">site oficial</a></p>

    </HomeContainer>
  );
}