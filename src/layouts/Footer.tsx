import React from "react";
import { FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>Copyright &copy; 2022 All Rights Reserved by Eggcellent NFT Club.</p>
      <p>
        <a
          href="/home"
          // href="https://www.minetopia.io/privacy"
          // target="_blank"
          // rel="noreferrer"
        >
          Eggcellent NFT Club Privacy
        </a>
        <a
          // href="https://www.minetopia.io/terms-and-conditions"
          href="/home"
          // target="_blank"
          // rel="noreferrer"
        >
          Eggcellent NFT Club T&C
        </a>
      </p>
    </FooterWrapper>
  );
};
