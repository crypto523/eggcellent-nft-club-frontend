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

type HeaderProps = {
  onMenuOpen: () => void;
};

export const Header: React.FC<HeaderProps> = ({ onMenuOpen }) => {
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
          <NavItem key={key} href={item.to}>
            {item.label}
          </NavItem>
        ))}
        <MintButton bg="#0098E5">
          <img src="/assets/images/metamask.svg" alt="" />
          Mint
        </MintButton>
        <MintButton bg="#8459FF">
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
