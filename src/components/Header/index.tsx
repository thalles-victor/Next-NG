import Img from "next/image";
import { HeaderContainer, ProfileContainer,  ProfileIcon, SignOutIcon } from "./styles";
import Logo from "../../assets/NGLogo.svg"


export function Header() {
  return(
    <HeaderContainer>
      <Img
        src={Logo}
        width={100}
        height={100}
        alt=""
      />

      <ProfileContainer>
        <ProfileIcon size={32}/>
        <SignOutIcon size={32}/>
      </ProfileContainer>

    </HeaderContainer>
  )
}