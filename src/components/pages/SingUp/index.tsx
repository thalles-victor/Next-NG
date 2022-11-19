
import Img from "next/image";
import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { Camera } from "phosphor-react"

import { CatchphraseContainer, ChecksIcon, Input, SelectAvatarField, InputAvatar, SingUpContainer } from "./styles";
import { api } from "../../../services/api";
import { toBase64 } from "./toBase64";
import { singUpRequest } from "../../../services/auth";
import { AuthContext } from "../../../contexts/AuthContext";

type Inputs = {
  name: string;
  userName: string;
  password: string;
  avatar: FileList
}

interface UserValidAPI {
  exist: boolean
}

export function SingUp() {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const [validNickName, setValidNickName]= useState<boolean>(false);
  const [avatarBase64, setAvatar64] = useState<string | null>(null);

  const { signUp } = useContext(AuthContext);

  watch(({ userName, avatar }) => {
    if (userName && userName !== "") {
      handleVerifyIfNameIsValid(userName)
    } if (userName === "" || userName === undefined) {
      setValidNickName(false)
    }

    if (avatar) {
      const file = avatar;

      if (file.length > 0) {
        const getFile = file[0];
        toBase64(getFile).then(
          (fileBase64) => setAvatar64((fileBase64) as string)
        )
      }
    }
  })



  async function handleSingUp({
    name,
    userName,
    password,
  }: Inputs) {
    console.log(userName)
    if (avatarBase64){
      await signUp({
        name,
        userName,
        password,
        avatar: avatarBase64
      })
    }
  }


  async function handleVerifyIfNameIsValid(userName: string) {
    await api.get(`/user/exist/${userName}`)
      .then(response => {
        const { exist } = (response.data) as UserValidAPI;
        
        setValidNickName(!exist)
      })
  }


  return(
    <SingUpContainer>
{/* 
      <h1>NG-Cash</h1>

      <CatchphraseContainer>
          <p>O mundo precisa de mais facilidade</p>
          <p>E é o que vamos lhe trazer</p>
      </CatchphraseContainer> */}

      <div>
        <h1>Criar conta</h1>
        <form onSubmit={handleSubmit(handleSingUp)}>
          <Input
            placeholder="Nome"
            {...register("name")}
          />
          <div>
            <Input
              placeholder="@ nome de usuário"
              {...register("userName")}
            />
            <ChecksIcon size={30} color={ validNickName? "able" : "disable" } />
          </div>
      
          <Input
            placeholder="senha"
            type="password"
            {...register("password")}
          />
          <SelectAvatarField>
            <label>
              <span>Selecionar Avatar</span>
             
              <InputAvatar
                placeholder="Avatar"
                type="file"
                {...register("avatar", { required: true })}
                />
                <Camera size={32}/>
                {
          avatarBase64?
          <Img
            alt="avatar"
            src={avatarBase64}
            width={120}
            height={120}
          /> : null
        }
              </label>
              
            </SelectAvatarField>


          <button
            type="submit"
            // disabled={!validNickName}
          >
            Criar Conta
          </button>

        </form>


      </div>

    </SingUpContainer>
  );
}