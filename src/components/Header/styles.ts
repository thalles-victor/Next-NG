import { UserCircle, SignOut } from "phosphor-react";
import { styled } from "../../styles";


export const HeaderContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",

  
  backgroundColor: "Black",
});

export const ProfileContainer = styled("div", {
  position: "absolute",
  right: "100px",

  svg: {
    color: "$withe",

    "&:hover": {
      cursor: "pointer",
      color: "gray"
    }
  }
})

export const ProfileIcon = styled(UserCircle, {})

export const SignOutIcon = styled(SignOut, {
  paddingLeft: "20px",
})
