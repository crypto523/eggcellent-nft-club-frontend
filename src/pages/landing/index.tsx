import React from "react";
import { LandingPageWrapper } from "./styles";
import { AppLayout } from "../../layouts/AppLayout";
import {
  ContactSection,
  GitBookSection,
  RoadMapSection,
  TeamSection,
  TextTypingAnimation,
} from "../../modules";

export const Landing: React.FC = () => {
  return (
    <AppLayout>
      <LandingPageWrapper id="home">
        <h1 id="home-title">
          <b>EGGCELLENT NFT CLUB</b>
          <br />
          <span>Chicken Eggs Farming</span>
          <TextTypingAnimation
            className="block"
            key="line-1"
            texts={["Backed by Real-World Poultry Farm in Malaysia"]}
          />
        </h1>
      </LandingPageWrapper>
      <GitBookSection />
      <RoadMapSection />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
};
