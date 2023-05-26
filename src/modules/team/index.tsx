import React from "react";
import {
  TeamDescription,
  TeamMemberItem,
  TeamMembers,
  TeamTitle,
  TeamWrapper,
} from "./styles";
import { teams } from "./data";

export const TeamSection: React.FC = () => {
  return (
    <TeamWrapper>
      <TeamTitle>TEAM PROFILE</TeamTitle>
      <TeamDescription>
        Lörem ipsum tirinar ambitism agnostivision dise, ontoform ett neling.
        Göföd dysvalens.
      </TeamDescription>
      <TeamMembers>
        {teams.map((item, key) => (
          <TeamMemberItem key={key}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </TeamMemberItem>
        ))}
      </TeamMembers>
    </TeamWrapper>
  );
};
