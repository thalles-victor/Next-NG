import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useContext } from "react";

import { api } from "../../../../../services/api";
import { TransactionContext } from "../../TransactionProvider";

import { BackButton, ButtonContainer, NextButton } from "../Button/styles";

import { AccountContainer, Avatar, Content, Footer } from "./styles";

interface AccountProps {
  handleBack: () => void;
  handleConfirm: () => void;
}


export function AccountInformation({ handleBack, handleConfirm }: AccountProps) {
  const { transactionInfo: { targetName, value }, getUserForTransaction, userForExecuteTransaction: userForTransection } = useContext(TransactionContext);
  function handleBackToForm() {
    handleBack()
  }
  getUserForTransaction(targetName);

  async function handleGetUserForTransaction() {
    
  }

  async function createTransaction() {
    const data = await api({
      url: "/user/transaction",
      method: "post",
      data: {
        transaction: {
          targetUserName: targetName,
          value: (typeof value === "string"? parseInt(value) : value)
        }
      }
    }).then(response => {
      return response.data;
    }).catch(error => {
      console.log(error)
    })

    handleConfirm();
  }

  return(
    <AccountContainer>

      {
        userForTransection?
        <Avatar
        alt="avatar"
        src={userForTransection?.avatar}
        width={80}
        height={80}
      /> : null
      }

      <Content>
        <h1>Enviar para</h1>

        <h2>{userForTransection?.userName}</h2>
        <h3>{userForTransection?.name}</h3>
        <p>Valor da transação: <span>{value}</span></p>
        <p>Momento da transação: <span>Agora</span></p>
      </Content>

      <Footer>
      <ButtonContainer className="buttoncontainer">
        
          <BackButton
            onClick={
              () => {
                handleBackToForm()
              }}>
            <ArrowLeft />
          </BackButton>
        
        <NextButton onClick={() => { 
            createTransaction()
          }}>
          <ArrowRight  />
        </NextButton>
      </ButtonContainer>
      </Footer>
      
    </AccountContainer>
  );
}