import { Checks } from "phosphor-react";
import { styled } from "../../../styles";

export const SingUpContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "70vh",
  backgroundColor: "$bg",

  h1: {
    color: "$white"
  },

  
  form: {
    // marginBottom: "600px",
    display: "flex",
    flexDirection: "column",

    width: "100%",

    button: {
      padding: "10px 0",
      marginBottom: "10px",
      width: "100%",
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "$white",
      color: "$black",
      border: "2px solid transparent",
      borderRadius: "20px",

      transition: "background-color .250s, color .250s, border-color .250s",

      "&:hover": {
        backgroundColor: "$black-900",
        color: "$white",
        border: "2px solid white"
      }
    }
  }
});

export const SelectAvatarField = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  alignContent: "center",

  color: "$white",
    
  label: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "&:hover": {
      cursor: "pointer"
    },

    img: {
      borderRadius: "50%"
    }
  },
})

export const Input = styled("input", {
  fontSize: "1.25rem",
  padding: "4px 0",
  paddingLeft: "8px",
  width: "400px",
  margin: "10px 0",
  border: "none",
  outline: "none",

  borderBottom: "2px solid white",
  backgroundColor: "$bg",
  color: "$white"
});

export const InputAvatar = styled("input", {
  display: "none",
});

export const ChecksIcon = styled(Checks, {
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

  color: "$white"
})