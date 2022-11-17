
import Img from "next/image"
import { resolve } from "path";
import React, { useState } from "react";


import { useForm } from 'react-hook-form'

import { CatchphraseContainer, ChecksIcon, Input, SingUpContainer } from "./styles";

type Inputs = {
  name: string;
  userName: string;
  password: string;
  avatar: FileList
}

export function SingUp() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [avatarBase64, setAvatar64] = useState<string | null>(null)

  function handleChangeImage() {
    
  }

  const toBase64 = (file: any) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })

  async function handleSingIn(data: Inputs) {

    const reader = new FileReader();
    const file = data.avatar;

    if (file.length > 0) {
      const getFile = file[0];
      toBase64(getFile).then(
        (fileBase64) => setAvatar64((fileBase64) as string)
      )
    }
  }

  const [validNickName, setValidNickName]= useState<boolean>(false);

  let namesInUse = [
    "jhon", 
    "angela",
    "mia khalifa"
  ]

  function handleVerifyIfNameIsValid(e: React.FormEvent<HTMLInputElement>) {


    const value =  e.currentTarget.value;
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

        <form onSubmit={handleSubmit(handleSingIn)}>
          <Input
            placeholder="Nome"
            {...register("name")}
          />
          <div>
            <Input
              placeholder="Apelido"
              {...register("userName")}
            />
            <ChecksIcon size={30} color={ validNickName? "able" : "disable" } />
          </div>
          <Input placeholder="cpf" />
          <Input
            placeholder="senha"
            type="password"
            {...register("password")}
          />
          <Input
            placeholder="Avatar"
            type="file"
            {...register("avatar")}
          />

          <button
            type="submit"
            // disabled={!validNickName}
          >
            Criar Conta
          </button>

        </form>

        {

          avatarBase64?
        <Img
            alt="avatar"
            src={avatarBase64}
            width={50}
            height={70}
          /> : null
        }
      </div>

    </SingUpContainer>
  );
}