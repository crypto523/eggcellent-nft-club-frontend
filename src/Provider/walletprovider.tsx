import WalletConnect from "@walletconnect/ethereum-provider";
import { infuraID } from "../constant/constant";

export const providerOptions = {
  walletconnect: {
    package: WalletConnect, // required
    options: {
      infuraId: infuraID, // required
      rpc: {
        80001: "https://rpc-mumbai.maticvigil.com",
      },
    },
  },
};
