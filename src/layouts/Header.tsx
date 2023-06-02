import React, { useEffect, useState } from "react";
import {
  HeaderLogo,
  HeaderMobileButton,
  HeaderNavWrapper,
  HeaderWrapper,
  MintButton,
  NavItem,
} from "./styles";
import { headerData } from "./data";
import { useNavigate } from "react-router-dom";
import { useEthContext } from "../context/EthereumContext";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import { providers } from "ethers";
import { infuraID } from "../constant/constant";
type HeaderProps = {
  onMenuOpen: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  const { currentAcc, setCurrentAcc, setProvider } = useEthContext();
  const navigate = useNavigate();
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) setHeader(true);
    else setHeader(false);
  };
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
      const web3Provider = await web3Modal.connect();

      web3Provider.on("accountsChanged", accountsChanged);

      const accounts = (await web3Provider.enable()) as string[];
      setCurrentAcc(accounts[0]);
      const provider = new providers.Web3Provider(web3Provider);
      setProvider(provider);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <HeaderWrapper className={header ? "header" : ""}>
      <HeaderLogo onClick={() => navigate("/")}>
        <img src="/assets/images/logo.png" alt="" />
      </HeaderLogo>
      <HeaderNavWrapper>
        {headerData.map((item, key) => (
          <NavItem
            key={key}
            href={item.to}
            target={item.label === "Gitbook" ? "_blank" : "_self"}
          >
            {item.label}
          </NavItem>
        ))}
        <MintButton bg="#0098E5" onClick={() => connect()}>
          <img src="/assets/images/metamask.svg" alt="" />
          {currentAcc
            ? `${currentAcc.substring(0, 2)}${currentAcc.substring(38)}`
            : "Mint"}
        </MintButton>
        <MintButton
          bg="#8459FF"
          onClick={() => window.open("https://WithPaper.com")}
        >
          <img src="/assets/images/paper-icon.svg" alt="" />
          Mint
        </MintButton>
      </HeaderNavWrapper>
      <HeaderMobileButton onClick={onMenuOpen}>
        <img src="/assets/images/menu.svg" alt="" />
      </HeaderMobileButton>
    </HeaderWrapper>
  );
};
