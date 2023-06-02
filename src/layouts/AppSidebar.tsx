import React from "react";
import {
  AppSidebarOverLay,
  AppSidebarWrapper,
  CloseButton,
  NavItem,
  NavMint,
  SidebarNavbar,
} from "./styles";
import { headerData } from "./data";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import { useEthContext } from "../context/EthereumContext";
import { providers } from "ethers";
import { infuraID } from "../constant/constant";
type SidebarProps = {
  isshow: boolean;
  onClose: () => void;
};

export const AppSidebar: React.FC<SidebarProps> = ({ isshow, onClose }) => {
  const { currentAcc, setCurrentAcc, setProvider } = useEthContext();
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: infuraID,
          rpc: {
            137: "https://rpc-mainnet.maticvigil.com",
            80001: "https://rpc-mumbai.maticvigil.com",
          },
        },
      },
    },
  });
  function accountsChanged(accounts: string[]) {
    if (accounts[0]) {
      setCurrentAcc(accounts[0]);
    } else {
      setCurrentAcc("");
      setProvider(null);
    }
  }

  async function connect() {
    try {
      onClose();
      const web3Provider = await web3Modal.connect();

      web3Provider.on("accountsChanged", accountsChanged);

      const accounts = (await web3Provider.enable()) as string[];
      setCurrentAcc(accounts[0]);
      const provider = new providers.Web3Provider(web3Provider);
      setProvider(provider);
    } catch (error) {}
  }
  return (
    <>
      <AppSidebarWrapper isshow={isshow ? "true" : undefined}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <SidebarNavbar>
          {headerData.map((item, key) => (
            <NavItem
              className={"sidebar"}
              key={key}
              href={item.to}
              target={item.label === "Gitbook" ? "_blank" : "_self"}
              onClick={onClose}
            >
              {item.label}
            </NavItem>
          ))}
          <NavMint onClick={() => connect()}>
            <img src="/assets/images/metamask.svg" alt="" />
            {currentAcc
              ? `${currentAcc.substring(0, 2)}...${currentAcc.substring(40)}`
              : "Mint"}
          </NavMint>
          <NavMint onClick={() => window.open("https://WithPaper.com")}>
            <img src="/assets/images/paper-icon.svg" alt="" />
            Mint
          </NavMint>
        </SidebarNavbar>
      </AppSidebarWrapper>
      <AppSidebarOverLay
        isshow={isshow ? "true" : undefined}
        onClick={onClose}
      />
    </>
  );
};
