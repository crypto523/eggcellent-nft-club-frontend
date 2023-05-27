import React, { useEffect, useState } from "react";
import {
  ChickImgWrapper,
  RectImgWrapper,
  WelcomeButtonWrapper,
  WelcomePageWrapper,
  WelcomeTitleWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

const WelcomeText: React.FC = () => (
  <WelcomeTitleWrapper>
    <video
      autoPlay
      playsInline
      muted
      loop
      preload=""
      poster="/_nuxt/img/rainbow-circle-black.25ba983.jpg"
    >
      <source src="/assets/rainbow.mp4" />
    </video>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%">
          <rect x="0" y="0" width="100%" height="100%" />
          <text y={60}>EGGCELENT NFT CLUB</text>
        </mask>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" />
    </svg>
    <h1 id="video-mask">EGGCELENT NFT CLUB</h1>
  </WelcomeTitleWrapper>
);

export const Welcome: React.FC = () => {
  const navigete = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [chickenPos, setChickenPos] =
    useState<Array<{ x: number; y: number }>>();
  const [rectPos, setRectPos] = useState<Array<{ x: number; y: number }>>();
  useEffect(() => {
    let tempChickPos: Array<{ x: number; y: number }> = [];
    let tempRectPos: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < 4; i++) {
      const chicken = document.getElementById(`chick-${i + 1}`);
      tempChickPos.push({
        x: chicken?.getBoundingClientRect().x || 0,
        y: chicken?.getBoundingClientRect().y || 0,
      });
    }

    for (let i = 0; i < 6; i++) {
      const rect = document.getElementById(`rect-${i + 1}`);
      tempRectPos.push({
        x: rect?.getBoundingClientRect().x || 0,
        y: rect?.getBoundingClientRect().y || 0,
      });
    }

    setChickenPos(tempChickPos);
    setRectPos(tempRectPos);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseMove: { (e: MouseEvent): void } = (e: MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <WelcomePageWrapper>
      <WelcomeText />
      <WelcomeButtonWrapper>
        <button onClick={() => navigete("/home")}>Let's Explore</button>
      </WelcomeButtonWrapper>
      <img src="/assets/images/welcome.png" className="polygon" alt="" />
      {[1, 2, 3, 4].map((item) => (
        <ChickImgWrapper
          id={`chick-${item}`}
          pos={mousePos}
          key={item}
          selfpos={chickenPos ? chickenPos[item - 1] : { x: 0, y: 0 }}
        >
          <img src={`/assets/images/chick${item}.png`} alt="" />
        </ChickImgWrapper>
      ))}
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <RectImgWrapper
          key={item}
          id={`rect-${item}`}
          pos={mousePos}
          selfpos={rectPos ? rectPos[item - 1] : { x: 0, y: 0 }}
        >
          <img src={`/assets/images/rect${item}.png`} alt="" />
        </RectImgWrapper>
      ))}
    </WelcomePageWrapper>
  );
};
