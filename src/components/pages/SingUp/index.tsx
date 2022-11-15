
import React, { useState } from "react";
import { Checks } from "phosphor-react"
import axios from "axios";

import { CatchphraseContainer, ChecksIcon, Input, SingUpContainer } from "./styles";

export function SingUp() {
  const [validNickName, setValidNickName]= useState<boolean>(false);

  let namesInUse = [
    "jhon", 
    "angela",
    "mia khalifa"
  ]

  function handleVerifyIfNameIsValid(e: React.FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    const nameIsUsed = namesInUse.includes(value)

    if (nameIsUsed) {
      setValidNickName(false)
    } else {
      setValidNickName(true)
    }

    if (value === "") {
      setValidNickName(false)
    }
  }


  return(
    <SingUpContainer>

      <h1>NG-Cash</h1>

      <CatchphraseContainer>
          <p>O mundo precisa de mais facilidade</p>
          <p>E é o que vamos lhe trazer</p>
      </CatchphraseContainer>

      <div>
        <h1>Criar conta</h1>

        <form>
          <Input placeholder="Nome" />
          <div>
            <Input placeholder="Apelido" onChange={handleVerifyIfNameIsValid}  />
            <ChecksIcon size={30} color={ validNickName? "able" : "disable" } />
          </div>
          <Input placeholder="cpf" />
          <Input
            placeholder="senha"
            type="password"
          />

          <button
            type="submit"
            disabled={!validNickName}
          >
            Criar Conta
          </button>
        </form>
      </div>

    </SingUpContainer>
  );
}