import { Checks } from "phosphor-react";
import { styled } from "../../../styles";

export const SingUpContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  height: "50vh",
  
  form: {
    display: "flex",
    flexDirection: "column",

    width: "100%",

    button: {
      padding: "8px 0",
      marginBottom: "10px",
      width: "100%",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "black",
      color: "#FFF",
      border: "1px black",

      transition: "background-color .1s",

      "&:hover": {
        backgroundColor: "#000D",
      }
    }
  }
});

export const Input = styled("input", {
  fontSize: "18px",
  padding: "4px 0",
  
  paddingLeft: "8px",

  width: "400px",
  margin: "10px 0",
  border: "none",
  borderBottom: "1px solid",
  outline: "none",
  
  variants: {
  }
});

export const ChecksIcon = styled(Checks, {
  position: "absolute",
  variants: {
    color: {
      able: {
        color: "green"
      },
      disable: {
        color: "red",
        opacity: "0.7"
      }
    }
  }
})

export const CatchphraseContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  gap: "1rem",
  marginTop: "20px",
  marginBottom: "70px",
})