import React, { useEffect, useState } from "react";
import {
  Communities,
  ContactContent,
  ContactDescription,
  ContactImg,
  ContactWrapper,
} from "./styles";
import { Footer } from "../../layouts/Footer";

export const ContactSection: React.FC = () => {
  const title1 = "JOIN";
  const title3 = "THE";
  const title2 = "COMMUNITY";
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const titleElem = document
      .getElementById("contact-title")
      ?.getBoundingClientRect().top;
    if (window.innerHeight >= Number(titleElem) && Number(titleElem) >= 0) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  };

  return (
    <ContactWrapper id="contact">
      <ContactContent>
        <ContactDescription>
          <h1 id="contact-title" className={anim ? "anim" : ""}>
            {title1.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            &nbsp;
            {title3.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            <br />
            <span>
              {title2.split("").map((item, key) => (
                <b key={key}>{item}</b>
              ))}
            </span>
          </h1>
          <p>Join us now and be part of the revolution!</p>
          <Communities>
            <a href="https://opensea.io" target="_blank" rel="noreferrer">
              <img src="/assets/images/opensea.svg" alt="" />
            </a>
            <a
              href="https://discord.gg/RQDcjGqkEw"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/images/discord.svg" alt="" />
            </a>
            <a
              href="https://twitter.com/EggcellentClub"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/images/twitter.svg" alt="" />
            </a>
            <a
              href="https://www.youtube.com/@EggcellentClub"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/assets/images/youtube.svg" alt="" />
            </a>
          </Communities>
        </ContactDescription>
        <ContactImg>
          <img src="/assets/images/chickens/N12.png" alt="" />
        </ContactImg>
      </ContactContent>
      <Footer />
    </ContactWrapper>
  );
};
