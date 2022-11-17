import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight } from "phosphor-react";

import { BackButton, ButtonContainer, NextButton } from "../Button/styles";
import { image } from "./image.temp";
import { AccountContainer, Avatar, Content, Footer } from "./styles";

interface AccountProps {
  handleBack: () => void;
}


export function AccountInformation({ handleBack }: AccountProps) {
  function handleBackToForm() {
    handleBack()
  }

  return(
    <AccountContainer>


      <Avatar
        alt="avatar"
        src={image}
        width={80}
        height={80}
      />

        <Content>
          <h1>Enviar para</h1>

          <h2>@ThallesGamePlay</h2>
          <h3>Thalles V. I. Santos</h3>
          <p>Valor da transação: <span>20,00</span></p>
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
          

          <NextButton>
            <ArrowRight />
          </NextButton>
        </ButtonContainer>
        </Footer>
      
    </AccountContainer>
  );
}