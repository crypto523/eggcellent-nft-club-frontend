import React from "react";
import { FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>Copyright 2022 All Rights Reserved by Eggcellent NFT Club.</p>
      <p>
        <a href="https://www.minetopia.io/privacy">
          Eggcellent NFT Club Privacy
        </a>
        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <a href="https://www.minetopia.io/terms-and-conditions">
          Eggcellent NFT Club T&C
        </a>
      </p>
    </FooterWrapper>
  );
};
