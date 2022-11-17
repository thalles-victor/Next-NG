import { styled } from "../../../../../styles";

export const HistoryContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  // padding: "40px 70px",

  border: "1px solid black",
  borderRadius: "8px",
  marginTop: "70px",
});

export const HistoryList = styled("div", {
  flex: 1,
  overflow: "auto",
  marginTop: "2rem"
})

export const Table = styled("table", {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "600px",

  th: {
    backgroundColor: "gray",
    padding: "1rem",
    textAlign: "left",
    fontSize: "0.875rem",
    lineHeight: "1.6",

    "&:first-child": {
      borderTopLeftRadius: "8px",
      paddignLeft: "1.5rem"
    },

    "&:last-child": {
      borderTopRightRadius: "8px",
      paddignRight: "1.5rem"
    }
  },

  td: {
    
  }
});

export const Header = styled("tr", {
  border: "1px solid"
})