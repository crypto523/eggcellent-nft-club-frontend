import { styled } from "styled-components";

export const GitbookWrapper = styled.div`
  padding: 100px 0;
  background: url("/assets/images/rect6.png") no-repeat,
    url("/assets/images/rect2.png") no-repeat,
    url("/assets/images/rect4.png") no-repeat, #fbf2ff;
  background-position: 50px 50px, 100% 80px, 45% 100%;
  background-size: 20%, 30%, 25%;
  @media screen and (max-width: 768px) {
    background-position: 50px 50px, 100% 150px, 45% 70%;
    background-size: 20%, 30%, 70%;
  }
`;

export const GitbookContent = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const GitbookDescription = styled.div`
  font-weight: 700;
  h1 {
    font-size: 70px;
    color: #000;
    span {
      color: #8459ff;
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
    margin-top: 30px;
    max-width: 720px;
    width: 100%;
    font-size: 24px;
    color: #000;
    line-height: 200%;
  }
  @media screen and (max-width: 1240px) {
    h1 {
      font-size: 55px;
    }
    p {
      font-size: 22px;
      max-width: 600px;
    }
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 45px;
    }
    p {
      font-size: 20px;
      max-width: 500px;
    }
  }
  @media screen and (max-width: 768px) {
    p {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 17px;
    }
  }
`;

export const GitbookImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    max-width: 440px;
    width: 100%;
  }
`;

export const GitbookButtonGroup = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const GitbookButton = styled.a`
  height: 68px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 60px;
  width: 210px;
  display: flex;
  margin-top: 30px;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
  justify-content: center;
  &.join {
    background: #ffc807;
    color: #000;
    margin-right: 20px;
  }
  &.check {
    color: #895df7;
    background-color: transparent;
    border: 1px solid #895df7;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 10px;
    &.join {
      margin-right: 0;
    }
  }
`;
