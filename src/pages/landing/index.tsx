import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { LandingPageWrapper } from "./styles";
import { AppLayout } from "../../layouts/AppLayout";
import {
  ContactSection,
  GitBookSection,
  RoadMapSection,
  TeamSection,
} from "../../modules";

export const Landing: React.FC = () => {
  return (
    <AppLayout>
      <LandingPageWrapper id="home">
        <h1 id="home-title">
          <b>EGGCELLENT NFT CLUB</b>
          <br />
          <span>Chicken Eggs Farming</span>
          <MDBContainer>
            <p>Backed by Real-World Poultry Farm in Malaysia</p>
          </MDBContainer>
        </h1>
      </LandingPageWrapper>
      <GitBookSection />
      <RoadMapSection />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
};
