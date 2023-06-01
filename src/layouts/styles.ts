import styled from "styled-components";

export const AppLayoutWrapper = styled.div`
position: relative;
`;

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
    background-color: #ffffff40;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px 10px #000000a0;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    height: 75px;
  }
`;

export const HeaderLogo = styled.div`
  cursor: pointer;
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

export const NavItem = styled.a`
  cursor: pointer;
  font-size: 24px;
  text-decoration: none;
  font-weight: 700;
  color: #000;
  &.sidebar {
    width: fit-content;
    font-size: 22px;
    color: #fff;
  }
  &:not(:first-child) {
    margin-left: 80px;
    &.sidebar {
      margin-left: 0;
      margin-top: 40px;
    }
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

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 50px 0;
  font-size: 20px;
  p {
    justify-content: center;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  a {
    white-space: nowrap;
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      margin-left: 14px;
    }
    @media screen and (max-width: 525px) {
      &:last-child {
        margin-left: 0;
      }
    }
  }
`;

export const AppSidebarWrapper = styled.div<{ isshow: string | undefined }>`
  color: #fff;
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
  @media screen and (max-width: 500px) {
    width: 50%;
    right: ${({ isshow }) => (isshow ? "0px" : "calc(-50% + 5px)")};
  }
`;

export const AppSidebarOverLay = styled.div<{ isshow: string | undefined }>`
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

export const CloseButton = styled.div`
  font-size: 40px;
  width: 50px;
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 16px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarNavbar = styled.div`
  padding: 100px 30px;
  display: flex;
  flex-direction: column;
`;

export const NavMint = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 22px;
  text-decoration: none;
  font-weight: 700;
  img {
    height: 20px;
    margin-right: 15px;
  }
  margin-top: 40px;
`;
