import styled from "styled-components";

export const AppLayoutWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 117px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 95px;
  background-color: transparent;
  &.header {
    background-color: #fff;
    box-shadow: 0 0 10px 10px #000000a0;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 75px;
  }
`;

export const HeaderLogo = styled.div`
  img {
    width: 100%;
  }
  width: 70px;
  @media screen and (max-width: 768px) {
    width: 40px;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1440px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  &:not(:first-child) {
    margin-left: 80px;
  }
`;

export const MintButton = styled.div<{ bg: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  background-color: ${({ bg }) => bg};
  width: 144px;
  height: 57px;
  border-radius: 57px;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 50px;
  img {
    margin-right: 10px;
    height: 20px;
  }
`;

export const HeaderMobileButton = styled.div`
  display: none;
  @media screen and (max-width: 1440px) {
    cursor: pointer;
    display: flex;
    width: 62px;
    height: 62px;
    align-items: center;
    justify-content: center;
    background-color: #000;
    border-radius: 50%;
    img {
      width: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const FooterWrapper = styled.div``;

export const AppSidebarWrapper = styled.div<{ isshow: boolean }>`
  position: fixed;
  z-index: 12;
  max-width: 430px;
  width: 100%;
  opacity: ${({ isshow }) => (isshow ? 1 : 0)};
  visibility: ${({ isshow }) => (isshow ? "visible" : "hidden")};
  right: ${({ isshow }) => (isshow ? "0px" : "-435px")};
  background-color: #8459ff;
  box-shadow: 0 0 10px 5px #00000080;
  height: 100vh;
`;

export const AppSidebarOverLay = styled.div<{ isshow: boolean }>`
  position: fixed;
  z-index: 11;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000060;
  opacity: ${({ isshow }) => (isshow ? 1 : 0)};
  visibility: ${({ isshow }) => (isshow ? "visible" : "hidden")};
`;

export const AppContentWrapper = styled.div``;
