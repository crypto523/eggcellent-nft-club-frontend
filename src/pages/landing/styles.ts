import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
export const MintFrom = styled.div`
  margin-top: 20px;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #00000050;
  
  background-color: #ffffff80;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--boxWhite);
  border-radius: 15px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 95%;
    max-width: 320px;
  }
  
`
export const SwitchBtn = styled.div`
margin-top: 5px;
  label{
    span{
      margin: 0 !important;
    }
  }
  input{
    display: none;
  }
`
export const MintContent = styled.div`
  img{
    width: 100%;
    max-width: 200px;
    border-radius: 20px;
    @media screen and (max-width: 550px) {
      margin-bottom: 20px;
    }
  }
  span{
    font-size: 30px;
    font-weight: bold;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const MintContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      font-size: 20px;
      margin-top: 5px;
      display: flex;
      div{
        font-weight: 900;
        cursor: pointer;
      }
    }
    padding: 0px 10px 0 10px;
    a{
      margin: 15px 0 0 0;
    }
`
export const MintForm = styled.div`
  display: flex;
  margin: 0 0 10px 0;



`
export const MintInput = styled.input`
  font-size: 20px;
  padding-left: 10px;
  width: 80px;
  font-weight: bold;
  outline: none;
  height: 50px;
  border-radius: 10px 0 0 10px;
  border: none;
`
export const CountBtn = styled.div`
  width: 50px;
  height: 50%;
  font-size: 18px;
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`
