import { v4 as uuid_v4 } from "uuid";
import { image } from "../components/pages/Dashboard/components/AccountInfo/image.temp";

type SingInRequest = {
  userName: string;
  password: string;
}

export function signInRequest(data: SingInRequest) {
  return {
    token: uuid_v4(),
    user: {
      name: "thalles víctor",
      userName: "@ThallesGamePlay",
      avatar: image
    }
  }
}

export async function recoverUserInformation() {
  return {
    user: {
      name: "thalles víctor",
      userName: "@ThallesGamePlay",
      avatar: image
    }
  }
}