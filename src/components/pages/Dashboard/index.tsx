import * as Dialog from "@radix-ui/react-dialog";
import Img from "next/image"

import {
  DashboardContainer,
  Content,
  InfoTransactionContainer,
  BalanceContainer,
} from "./styles";

import {
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
  ExitButton,

} from "./dialog";

import { FormComponent } from "./components/Form";
import { AccountInformation } from "./components/AccountInfo";
import { useContext, useEffect, useState } from "react";
import { History } from "./components/History";
import { AuthContext } from "../../../contexts/AuthContext";
import { api } from "../../../services/api";

type TransactionState = "form" | "account"


export function Dashboard() {

  const [transactionState, setTransactionState] = useState<TransactionState>("form")
  
  const {
    user
  } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users");
  }, [])


  function handleNextToAccountInfo() {
    setTransactionState("account")
  }

  function handleBackToForm() {
    setTransactionState("form")
  }

  return(
    <DashboardContainer>
      <Content>
        <h1>${user?.userName}</h1>

        {
          user?.avatar? 
          <Img
            alt=""
            width={300}
            height={300}
            src={user?.avatar}
          /> : null
        }

        <InfoTransactionContainer>
          <BalanceContainer>
            <h1>R$ 100,00</h1>
            <span> saldo em conta</span>
          </BalanceContainer>

          <Dialog.Root>
            <Dialog.Trigger asChild>
            <button>Fazer transferência</button>
            </Dialog.Trigger>
          <Dialog.Portal>
            <DialogOverlay />
            <DialogContent>
            <Dialog.Close asChild>
              <ExitButton size={18} />
            </Dialog.Close>
              <DialogTitle>Fazer transação</DialogTitle>
              <DialogDescription>
                Tenha certeza que os dados estão corretos ao realizar a transação
              </DialogDescription>

              {
               transactionState === "account"? <AccountInformation handleBack={handleBackToForm} /> :  <FormComponent handleNext={handleNextToAccountInfo}/> 
              }
              

            </DialogContent>
          </Dialog.Portal>
          </Dialog.Root>

        </InfoTransactionContainer>


        <History />
      </Content>
    </DashboardContainer>
  );
}

