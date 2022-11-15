import { styled } from "../../../styles";

export const LoginContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",

  
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
    height: "auto",

    input: {
      fontSize: "18px",
      padding: "4px 0",
      paddingLeft: "8px",
      width: "400px",
      margin: "10px 0",
    },

    button: {
      padding: "8px 0",
      marginBottom: "10px",
      width: "100%",
      fontSize: "18px",
      fontWeight: "bold",
      
      
    }
  }

})