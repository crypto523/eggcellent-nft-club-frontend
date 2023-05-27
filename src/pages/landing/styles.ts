import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  padding-top: 200px;
  background: url("/assets/images/Eggcellent.png") no-repeat;
  background-size: cover;
  background-position: top center;
  min-height: 100vh;
  h1 {
    text-align: center;
    color: #240d13;
    &.anim {
      b {
        animation: anim 2s ease-in-out;
      }
    }
    b {
      font-family: "Anton", sans-serif !important;
      display: inline-block;
    }
    font-weight: 400;
    font-size: 70px;
    line-height: 100%;
    letter-spacing: 0.04em;
    span {
      font-size: 60px;
      b {
        font-family: filson-soft !important;
        font-weight: 100;
      }
      letter-spacing: 0;
      font-weight: 100;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      font-size: 50px;
      span {
        font-size: 45px;
      }
    }
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 35px;
      span {
        font-size: 28px;
      }
    }
  }
`;
