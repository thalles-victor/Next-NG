import * as Dialog from "@radix-ui/react-dialog"
import { X, ArrowRight } from "phosphor-react"

import {
  Form,
  ValueInput,
  Input,
} from "./styles";

import { ButtonContainer, BackButton, NextButton,  } from "../Button/styles";

interface FormProps {
  handleNext: () => void;
}

export function FormComponent({ handleNext }: FormProps) {
  return(
    <Form action="">
            
      <ValueInput
        type="number"
        min="1"        
      />

      <Input type="text" />
      <label>nome</label>

      <ButtonContainer>
        
      <Dialog.Close asChild>
        <BackButton>
          <X />
        </BackButton>

      </Dialog.Close>
        <NextButton onClick={ () => {
          handleNext()
        }}>
          <ArrowRight />
        </NextButton>
      </ButtonContainer>
    </Form>
  )
}