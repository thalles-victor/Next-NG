import { styled } from "@stitches/react";

export const DashboardContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
})

export const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  h1: {
    alignSelf: "flex-start"
  }
});



export const InfoTransactionContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "40vw",

  padding: "100px 100px",

  button: {
    alignSelf: "flex-start",
    padding: "5px 10px",
    fontSize: "20px",
    fontWeight: "bold",

    border: "1px solid black",
    borderRadius: "px",
    backgroundColor: "white",

    transition: "background-color .1s, color .1s",

    "&:hover": {
      backgroundColor: "black",
      color: "white"
    }
    
  }
})

export const BalanceContainer = styled("div", {
  border: "1px solid black",
  padding: "10px 20px",
  borderRadius: "8px",
  margin: "-8px 0",
  
})

export const History = styled("div", {
  alignSelf: "center",
  border: "1px solid",
  padding: "80px",
});