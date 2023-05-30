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
    b {
      font-family: "Anton", sans-serif !important;
      display: inline-block;
    }
    p {
      position: relative;
      font-weight: bold !important;
      overflow: hidden;
      font-size: 20px;
      margin: auto;
      line-height: 30px;
      margin-top: 24px;
      border-right: 2px solid #000;
      white-space: nowrap;
      animation: typewriter 4s steps(44) 1s 1 normal both,
        blinkTextCursor 500ms infinite;
    }
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 587px;
      }
    }
    @keyframes blinkTextCursor {
      from {
        border-right-color: #000;
      }
      to {
        border-right-color: transparent;
      }
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
