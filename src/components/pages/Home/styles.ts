import { keyframes } from "@stitches/react";
import { styled } from "../../../styles";

const translatedApresentation = keyframes({
  "0%": { 
    transform: "translate(-40px, 0px)"
   },
   "100%": {
    transform: "translate(0px, 0px)"
   }
})

export const HomeContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100vh",
  maxHeight: "100vh",
  backgroundColor: "$black-900",

  h2: {
    fontWeight: "normal"
  },

  p: {
    color: "$white",
    fontSize: "22px",
    marginTop: "10rem",

    a: {
      color: "green"
    }
  }
});

export const ApresentatonMessage = styled("div", {
  marginBottom: "200px",
  animation: `${translatedApresentation} 1s`,
  h2: {
    color: "$white"
  }
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  gap: "2rem"
})

export const ButtonToDashboard = styled("button", {
  
});

export const ButtonAccout = styled("button", {
  width: "200px",
  padding: "20px 0px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "$black-900",
  border: "2px solid transparent",
  borderRadius: "20px",

  transition: "color .250s, background-color .250s",

  "&:hover": {
    backgroundColor: "$black-900",
    color: "$white",
    border: "2px solid white"
  }
});
