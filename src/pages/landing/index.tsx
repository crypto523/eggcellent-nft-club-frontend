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
  return (
    <AppLayout>
      <LandingPageWrapper id="home" />
      <GitBookSection />
      <RoadMapSection />
      <TeamSection />
      <ContactSection />
    </AppLayout>
  );
};
