import React, { useEffect, useState } from "react";
import {
  ChickImgWrapper,
  RectImgWrapper,
  WelcomeButtonWrapper,
  WelcomePageWrapper,
  WelcomeTitleWrapper,
} from "./styles";

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

    for (let i = 0; i < 4; i++) {
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
        <button>Let's Explore</button>
        <img src="/assets/images/welcome.png" alt="" />
      </WelcomeButtonWrapper>
      <ChickImgWrapper
        id="chick-1"
        pos={mousePos}
        selfPos={chickenPos ? chickenPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/chick1.svg" alt="" />
      </ChickImgWrapper>
      <ChickImgWrapper
        id="chick-2"
        pos={mousePos}
        selfPos={chickenPos ? chickenPos[1] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/chick2.svg" alt="" />
      </ChickImgWrapper>
      <ChickImgWrapper
        id="chick-3"
        pos={mousePos}
        selfPos={chickenPos ? chickenPos[2] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/chick3.svg" alt="" />
      </ChickImgWrapper>
      <ChickImgWrapper
        id="chick-4"
        pos={mousePos}
        selfPos={chickenPos ? chickenPos[3] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/chick4.svg" alt="" />
      </ChickImgWrapper>
      <RectImgWrapper
        id="rect-1"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect1.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-2"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect2.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-3"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect3.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-4"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect4.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-5"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect5.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-6"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect6.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-7"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect7.png" alt="" />
      </RectImgWrapper>
      <RectImgWrapper
        id="rect-8"
        pos={mousePos}
        selfPos={rectPos ? rectPos[0] : { x: 0, y: 0 }}
      >
        <img src="/assets/images/rect8.png" alt="" />
      </RectImgWrapper>
    </WelcomePageWrapper>
  );
};
