import { styled } from "styled-components";

export const RoadmapWrapper = styled.div`
  padding: 70px 0;
  background-color: #fff8f3;
  & > * {
    width: 90%;
    margin: auto;
  }
  h1 {
    font-size: 80px;
    font-weight: 700;
    padding-left: 30px;
    margin-bottom: 50px;
  }
  h3 {
    padding-left: 30px;
    font-size: 48px;
    font-weight: 700;
    color: #8459ff;
  }
  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 60px;
      margin-bottom: 30px;
    }
    h3 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    & > * {
      width: 98%;
      margin: auto;
    }
    h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 30px 0;
    h3 {
      font-size: 24px;
    }
    h1,
    h3 {
      padding-left: 0;
    }
  }
  @media screen and (max-width: 450px) {
    text-align: center;
    h3 {
      font-size: 20px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  img.roadmap {
    border: 8px solid #8459ff;
    border-radius: 40px;
    width: 100%;
  }
  img.chicken {
    position: absolute;
    width: 250px;
    right: 0;
    top: -280px;
  }
  @media screen and (max-width: 768px) {
    img.chicken {
      width: 200px;
      top: -230px;
    }
  }
  @media screen and (max-width: 640px) {
    margin-top: 10px;
    img.chicken {
      width: 100px;
      top: -110px;
    }
  }
  @media screen and (max-width: 450px) {
    text-align: center;
    img.chicken {
      display: none;
    }
  }
`;
