import React, { useEffect, useState } from "react";
import { TeamMemberItem, TeamMembers, TeamTitle, TeamWrapper } from "./styles";
import { teams } from "./data";

export const TeamSection: React.FC = () => {
  const title1 = "TEAM";
  const title2 = "PROFILE";
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const titleElem = document
      .getElementById("team-title")
      ?.getBoundingClientRect().top;
    if (window.innerHeight >= Number(titleElem) && Number(titleElem) >= 0) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  };
  return (
    <TeamWrapper>
      <TeamTitle id="team-title" className={anim ? "anim" : ""}>
        {title1.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
        &nbsp;
        {title2.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
      </TeamTitle>

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
