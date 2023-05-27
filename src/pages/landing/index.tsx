import React from "react";
import { LandingPageWrapper } from "./styles";
import { AppLayout } from "../../layouts/AppLayout";
import {
  ContactSection,
  GitBookSection,
  RoadMapSection,
  TeamSection,
} from "../../modules";

export const Landing: React.FC = () => {
  const title1 = "EGGCELLENT";
  const title2 = "NFT";
  const title3 = "CLUB";
  const title4 = "Chicken";
  const title5 = "Eggs";
  const title6 = "Farming";

  return (
    <AppLayout>
      <LandingPageWrapper id="home">
        <h1 id="home-title">
          {title1.split("").map((item, key) => (
            <b key={key}>{item}</b>
          ))}
          &nbsp;
          {title2.split("").map((item, key) => (
            <b key={key}>{item}</b>
          ))}
          &nbsp;
          {title3.split("").map((item, key) => (
            <b key={key}>{item}</b>
          ))}
          <br />
          <span>
            {title4.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            &nbsp;
            {title5.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
            &nbsp;
            {title6.split("").map((item, key) => (
              <b key={key}>{item}</b>
            ))}
          </span>
        </h1>
      </LandingPageWrapper>
      <GitBookSection />
      <RoadMapSection />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
};
