import { createContext, useContext,Dispatch,SetStateAction  } from "react";
import Web3 from "web3";
interface IMenuContext {
  provider: any;
  setProvider: Dispatch<SetStateAction<any>>;
  accounts?: any;
  web3?: any;
  currentAcc: any;
  setCurrentAcc: Dispatch<SetStateAction<any>>;
  connect: any;
}

export const EthereumContext = createContext<IMenuContext>({
  provider: [],
  accounts: [],
  web3: Web3 ? Web3 : null,
  currentAcc: "",
  setProvider: ()=>{},
  setCurrentAcc: ()=>{},
  connect:()=>{},
});

export const useEthContext = () => useContext(EthereumContext);
