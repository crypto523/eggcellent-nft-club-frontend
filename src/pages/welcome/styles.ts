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
  background-color: #fff2f2;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const WelcomeTitleWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 800px;
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
    width: 100%;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0; // needed for FF, Safari, Edge
    height: 100%;
    text {
      font-family: filson-soft;
      font-weight: 900;
      text-transform: uppercase;
      width: 100%;
      font-size: 72px;
    }
    rect {
      fill: #fff7f7;
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
    max-width: 345px;
    svg {
      text {
        font-size: 32px;
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
    font-family: filson-soft;
    width: 248px;
    color: #fff;
    font-weight: 800;
    background-color: #8459ff;
    border: none;
    outline: none;
    border-radius: 68px;
    height: 68px;
  }
  img {
    width: 250px;
    margin-top: 20px;
  }
`;

export const RectImgWrapper = styled.div<{
  pos: { x: number; y: number };
  selfPos: { x: number; y: number };
}>`
  position: absolute;
  transition: all 0.3s ease-in-out;
  &#rect-1 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 290px;
    }
    top: -100px;
    left: 45%;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 15}px) translateY(${
        (pos.y - selfPos.y) / 20
      }px)`};
  }
  &#rect-2 {
    img {
      animation: ${anim} 3s ease-in-out infinite;
      width: 250px;
    }
    top: 100px;
    left: 70px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 17}px) translateY(${
        (pos.y - selfPos.y) / 17
      }px)`};
  }
  &#rect-3 {
    img {
      animation: ${anim} 2.7s ease-in-out infinite;
      width: 400px;
    }
    bottom: -100px;
    left: -100px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 25}px) translateY(${
        (pos.y - selfPos.y) / 30
      }px)`};
  }
  &#rect-4 {
    img {
      animation: ${anim} 3.1s ease-in-out infinite;
      width: 500px;
    }
    right: -100px;
    bottom: -100px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 21}px) translateY(${
        (pos.y - selfPos.y) / 15
      }px)`};
  }
  &#rect-5 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 250px;
    }
    right: 150px;
    bottom: 350px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 26}px) translateY(${
        (pos.y - selfPos.y) / 30
      }px)`};
  }
  &#rect-6 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
      width: 200px;
    }
    left: 400px;
    bottom: 250px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 30}px) translateY(${
        (pos.y - selfPos.y) / 20
      }px)`};
  }
`;

export const ChickImgWrapper = styled.div<{
  pos: { x: number; y: number };
  selfPos: { x: number; y: number };
}>`
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  &#chick-1 {
    img {
      animation: ${anim} 2.5s ease-in-out infinite;
    }
    top: 130px;
    left: 270px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 30}px) translateY(${
        (pos.y - selfPos.y) / 30
      }px)`};
  }
  &#chick-2 {
    img {
      animation: ${anim} 2.8s ease-in-out infinite;
    }
    top: 100px;
    right: 200px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 22}px) translateY(${
        (pos.y - selfPos.y) / 22
      }px)`};
  }
  &#chick-3 {
    img {
      animation: ${anim} 2.3s ease-in-out infinite;
    }
    bottom: 100px;
    left: 240px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 23}px) translateY(${
        (pos.y - selfPos.y) / 23
      }px)`};
  }
  &#chick-4 {
    img {
      animation: ${anim} 3s ease-in-out infinite;
    }
    bottom: 100px;
    right: 200px;
    transform: ${({ pos, selfPos }) =>
      `translateX(${(pos.x - selfPos.x) / 25}px) translateY(${
        (pos.y - selfPos.y) / 25
      }px)`};
  }
`;
