import { styled } from "styled-components";

export const TeamWrapper = styled.div`
  background-color: #fbf2ff;
  padding: 40px 0;
  & > * {
    width: 90%;
    margin: auto;
  }
`;

export const TeamTitle = styled.div`
  text-align: center;
  font-size: 54px;
  font-weight: 900;
  color: #8459ff;
  margin-bottom: 70px;
  @media screen and (max-width: 690px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const TeamDescription = styled.p`
  font-size: 26px;
  color: #000;
  font-weight: 600;
  text-align: center;
  @media screen and (max-width: 690px) {
    font-size: 20px;
  }
`;

export const TeamMembers = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 70px;
  justify-content: space-between;
  @media screen and (max-width: 1320px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }
  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
`;

export const TeamMemberItem = styled.div`
  max-width: 295px;
  text-align: center;
  justify-self: center;
  img {
    width: 295px;
    height: 295px;
    border: 5px solid #8459ff;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 50px;
  }
  h3 {
    font-size: 28px;
    color: #000;
    font-weight: 900;
    margin-bottom: 30px;
  }
  p {
    font-weight: 700;
    font-size: 20px;
    color: #8459ff;
  }
`;
