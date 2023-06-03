import { styled } from "styled-components";

export const ContactWrapper = styled.div`
  padding: 117px 0 0;
  background: url("/assets/images/rect3.png") no-repeat,
    url("/assets/images/rect6.png") no-repeat, #8459ff;
  background-position: 100% 100%, -200px -100px;
  background-size: 400px, 300px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 75px 0;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ContactDescription = styled.div`
  h1 {
    font-size: 100px;
    font-weight: 700;
    color: #fff;
    span {
      color: #ffdd00;
    }
    &.anim {
      b {
        animation: anim 2s ease-in-out;
      }
    }
    b {
      display: inline-block;
    }
  }
  @keyframes anim {
    0% {
      transform: rotate(70deg) scale(0);
    }
    50% {
      transform: rotate(-10deg) scale(1);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  p {
    font-size: 26px;
    color: #fff;
    font-weight: 700;
    max-width: 890px;
    width: 100%;
    line-height: 180%;
  }
  @media screen and (max-width: 1240px) {
    h1 {
      font-size: 90px;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 70px;
    }
    p {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 44px;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const ContactImg = styled.div`
  img {
    width: 100%;
  }
  max-width: 450px;
  width: 100%;
`;

export const Communities = styled.div`
  display: flex;
  margin-top: 30px;
  a {
    text-decoration: none;
    &:not(:last-child) {
      margin-right: 20px;
    }
    img {
      width: 48px;
      height: 48px;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
