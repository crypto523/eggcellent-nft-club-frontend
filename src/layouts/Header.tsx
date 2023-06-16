import React, { useEffect, useState } from "react";
import {
  HeaderLogo,
  HeaderMobileButton,
  HeaderNavWrapper,
  HeaderWrapper,
  MintButton as MintBtn,
  NavItem,
} from "./styles";
import { headerData } from "./data";
import { useNavigate } from "react-router-dom";
import { MintButton } from "../modules/mint";
import { useEthContext } from "../context/EthereumContext";
type HeaderProps = {
  onMenuOpen: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
  const { connect } = useEthContext();
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
        <div>
          <MintBtn bg="#0098e4" onClick={connect}>
            <MintButton />
          </MintBtn>
        </div>

        <MintBtn
          bg="#8459FF"
          onClick={() =>
            window.open(
              "https://withpaper.com/checkout/182c8891-fe98-4d39-a101-d4ae6de554b1"
            )
          }
        >
          <img src="/assets/images/paper-icon.svg" alt="" />
          Mint
        </MintBtn>
      </HeaderNavWrapper>
      <HeaderMobileButton onClick={onMenuOpen}>
        <img src="/assets/images/menu.svg" alt="" />
      </HeaderMobileButton>
    </HeaderWrapper>
  );
};
