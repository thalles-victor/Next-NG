import { createContext, ReactNode, useState } from "react";
import { api } from "../../../services/api";

interface TransactionInfoProps {
  targetName: string;
  value: number;
}

interface UserForExecuteTransactionProps {
  name: string;
  userName: string;
  avatar: string;
}

interface TransactionContextProps {
  transactionInfo: TransactionInfoProps;
  userForExecuteTransaction: UserForExecuteTransactionProps | null;
  getUserForTransaction: (targetName: string)  => Promise<void>
  handleSetTransactionInfo: (transactionInfo: TransactionInfoProps) => void;
}

export const TransactionContext = createContext({} as TransactionContextProps)

export function TransactionProvider(
{ children }
:
{ children: ReactNode 
}) {
  const [transactionInfo, setTransactionInfo] = useState<TransactionInfoProps>({
    targetName: "",
    value: 0
  });

  const [userForExecuteTransaction, setUserForExecuteTransaction] = useState<UserForExecuteTransactionProps | null>(null)

  function handleSetTransactionInfo({ targetName, value }: TransactionInfoProps) {
    setTransactionInfo({
      targetName,
      value
    })
  }

  async function getUserForTransaction(targetName: string) {
    const { user } = await api({
      url: `/user/public/${targetName}`,
    }).then(response => {
      return response.data
    }).catch((error) => {
      console.log("Error: ", error)
    })

    if (user) {
      setUserForExecuteTransaction(user)
    }
  }
  
  return(
    <TransactionContext.Provider value={ { transactionInfo, handleSetTransactionInfo, userForExecuteTransaction, getUserForTransaction } }>
      { children }
    </TransactionContext.Provider>
  );
}