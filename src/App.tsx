import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Welcome } from "./pages";
import { EthereumContext } from "./context/EthereumContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/ethereum-provider";
import { providers } from "ethers";
import { MyMark } from "./modules/MyMark";

const App: React.FC = () => {
  const [provider, setProvider] = useState<any>(null);
  const [currentAcc, setCurrentAcc] = useState("");
  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "38ca4311ea3e4be3a2a1b4f2abd4b8fb",
          rpc: {
            137: "https://rpc-mainnet.maticvigil.com",
          },
        },
      },
    },
  });

  function accountsChanged(accounts: string[]) {
    try {
      if (accounts) {
        setCurrentAcc(accounts[0]);
      } else {
        setCurrentAcc("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function reset() {
    setCurrentAcc("");
    setProvider(null);
    web3Modal.clearCachedProvider();
  }
  const handleChainChanged = (chainId: string) => {
    if (chainId === "0x89") {
    } else {
      toast.error("Please select Polygon mainnet.", {
        theme: "dark",
      });
      setProvider(null);
    }
  };
  async function connect() {
    try {
      if (window.ethereum.chainId === "0x89") {
        const web3Provider = await web3Modal.connect();

        web3Provider.on("accountsChanged", accountsChanged);
        web3Provider.on("chainChanged", handleChainChanged);
        web3Provider.on("disconnect", reset);

        const accounts = (await web3Provider.enable()) as string[];
        setCurrentAcc(accounts[0]);
        const provider = new providers.Web3Provider(web3Provider);

        setProvider(provider);
      } else {
        toast.error("Please select Polygon mainnet.", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Transaction Error", {
        theme: "dark",
      });
    }
  }
  return (
    <EthereumContext.Provider
      value={{
        provider,
        currentAcc,
        setProvider,
        setCurrentAcc,
        connect,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </Router>
      <ToastContainer />
      <MyMark />
    </EthereumContext.Provider>
  );
};

export default App;
