import styled, { keyframes } from "styled-components";

const anim = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const WelcomePageWrapper = styled.div`
  background-color: #fff;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  img.polygon {
    width: 250px;
    margin-top: 20px;
    position: relative;
    z-index: 1;
  }
`;

export const WelcomeTitleWrapper = styled.div`
  position: relative;
  z-index: 0;
  width: 100%;
  max-width: 670px;
  height: fit-content;
  display: flex;
  align-items: center;
  overflow: hidden;
  h1 {
    color: #00000000;
    font-size: 50px;
  }
  video {
    position: absolute;
    z-index: 1;
    width: 100%;
    object-fit: cover;
  }

  svg {
    width: calc(100% + 10px);
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0; // needed for FF, Safari, Edge
    height: calc(100% + 10px);
    text {
      font-weight: 900;
      text-transform: uppercase;
      width: 100%;
      font-size: 62px;
    }
    rect {
      fill: #fff;
    }
    > rect {
      -webkit-mask: url(#mask);
      mask: url(#mask);
    }
  }
  @media screen and (max-width: 768px) {
    max-width: 650px;
    svg {
      text {
        font-size: 60px;
      }
    }
  }
  @media screen and (max-width: 650px) {
    max-width: 320px;
    svg {
      text {
        font-size: 29px;
      }
    }
    h1 {
      font-size: 40px;
    }
  }
`;

export const WelcomeButtonWrapper = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 24px;
    width: 248px;
    color: #fff;
    font-weight: 800;
    background-color: #8459ff;
    border: none;
    outline: none;
    border-radius: 68px;
    height: 68px;
  }
`;

export const RectImgWrapper = styled.div<{
  pos: { x: number; y: number };
  selfpos: { x: number; y: number };
}>`
  position: absolute;
  transition: all 0.3s ease-in-out;
  &#rect-1 {
    width: 15%;
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 100%;
    }
    top: -10%;
    left: 45%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 15}px) translateY(${
        (pos.y - selfpos.y) / 20
      }px)`};
  }
  &#rect-2 {
    img {
      animation: ${anim} 3s ease-in-out infinite;
      width: 100%;
    }
    width: 19%;
    top: 10%;
    left: 3%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 17}px) translateY(${
        (pos.y - selfpos.y) / 17
      }px)`};
  }
  &#rect-3 {
    img {
      animation: ${anim} 2.7s ease-in-out infinite;
      width: 100%;
    }
    width: 23%;
    bottom: -10%;
    left: -5%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 25}px) translateY(${
        (pos.y - selfpos.y) / 30
      }px)`};
  }
  &#rect-4 {
    img {
      animation: ${anim} 3.1s ease-in-out infinite;
      width: 100%;
    }
    width: 25%;
    right: -5%;
    bottom: -10%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 21}px) translateY(${
        (pos.y - selfpos.y) / 15
      }px)`};
  }
  &#rect-5 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 100%;
    }
    width: 15%;
    right: 7%;
    bottom: 37%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 26}px) translateY(${
        (pos.y - selfpos.y) / 30
      }px)`};
  }
  &#rect-6 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 100%;
    }
    width: 10%;
    left: 23%;
    bottom: 30%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 30}px) translateY(${
        (pos.y - selfpos.y) / 20
      }px)`};
  }
`;

export const ChickImgWrapper = styled.div<{
  pos: { x: number; y: number };
  selfpos: { x: number; y: number };
}>`
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  &#chick-1 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 100%;
    }
    width: 12%;
    top: 8%;
    left: 13%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 30}px) translateY(${
        (pos.y - selfpos.y) / 30
      }px)`};
  }
  &#chick-2 {
    img {
      animation: ${anim} 2.8s ease-in-out infinite;
      width: 100%;
    }
    width: 12%;
    top: 5%;
    right: 13%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 22}px) translateY(${
        (pos.y - selfpos.y) / 22
      }px)`};
  }
  &#chick-3 {
    img {
      animation: ${anim} 2.3s ease-in-out infinite;
      width: 100%;
    }
    width: 12%;
    bottom: 10%;
    left: 12%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 23}px) translateY(${
        (pos.y - selfpos.y) / 23
      }px)`};
  }
  &#chick-4 {
    img {
      animation: ${anim} 3s ease-in-out infinite;
      width: 100%;
    }
    width: 12%;
    bottom: 12%;
    right: 12%;
    transform: ${({ pos, selfpos }) =>
      `translateX(${(pos.x - selfpos.x) / 25}px) translateY(${
        (pos.y - selfpos.y) / 25
      }px)`};
  }
  @media screen and (max-width: 768px) {
    & {
      width: 20% !important;
    }
  }
`;
