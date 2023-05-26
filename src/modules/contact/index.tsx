import React from "react";
import {
  Communities,
  ContactContent,
  ContactDescription,
  ContactImg,
  ContactWrapper,
} from "./styles";

export const ContactSection: React.FC = () => {
  return (
    <ContactWrapper id="contact">
      <ContactContent>
        <ContactDescription>
          <h1>
            JOIN THE <br />
            <span>COMMUNITY</span>
          </h1>
          <p>
            Lörem ipsum tirinar ambitism agnostivision dise, ontoform ett
            neling. Göföd dysvalens. Gamification reasion utan
            investeringsfrämjande psykofaktisk terration.
          </p>
          <Communities>
            <a href="https://opensea.io" target="_blank" rel="noreferrer">
              <img src="/assets/images/opensea.svg" alt="" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer">
              <img src="/assets/images/discord.svg" alt="" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/assets/images/twitter.svg" alt="" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src="/assets/images/youtube.svg" alt="" />
            </a>
          </Communities>
        </ContactDescription>
        <ContactImg>
          <img src="/assets/images/chickens/N12.png" alt="" />
        </ContactImg>
      </ContactContent>
    </ContactWrapper>
  );
};
