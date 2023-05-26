import React, { useEffect, useState } from "react";
import {
  GitbookButton,
  GitbookButtonGroup,
  GitbookContent,
  GitbookDescription,
  GitbookImg,
  GitbookWrapper,
} from "./styles";

export const GitBookSection: React.FC = () => {
  const title1 = "EGGCELENT";
  const title2 = "PROJECT";
  const title3 = "NET";
  const title4 = "COLLECTION";
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const titleElem = document
      .getElementById("gitbook-title")
      ?.getBoundingClientRect().top;
    if (window.innerHeight >= Number(titleElem) && Number(titleElem) >= 0) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  };
  return (
    <GitbookWrapper>
      <GitbookContent>
        <GitbookDescription>
          <h1 id="gitbook-title" className={anim ? "anim" : ""}>
            {title1.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            &nbsp;
            {title2.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            <br />
            <span>
              {title3.split("").map((item, key) => (
                <b key={key}>{item}</b>
              ))}
              &nbsp;
              {title4.split("").map((item, key) => (
                <b key={key}>{item}</b>
              ))}
            </span>
          </h1>
          <p>
            Lörem ipsum sMF hykaligt athleisure facial recognition vertikal,
            tillväxtföretag inte computer vison. RFID personalisering.
          </p>
          <GitbookButtonGroup>
            <GitbookButton
              className="join"
              href="https://discord.gg/RQDcjGqkEw"
              target="_blank"
            >
              Join Discord
            </GitbookButton>
            <GitbookButton
              className="check"
              href="https://twitter.com/EggcellentClub"
              target="_blank"
            >
              Check Twitter
            </GitbookButton>
          </GitbookButtonGroup>
        </GitbookDescription>
        <GitbookImg>
          <img src="/assets/images/chickens/N1.png" alt="" />
        </GitbookImg>
      </GitbookContent>
    </GitbookWrapper>
  );
};
