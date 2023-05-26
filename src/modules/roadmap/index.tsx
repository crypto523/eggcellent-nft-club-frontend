import React from "react";
import { ImageWrapper, RoadmapWrapper } from "./styles";

export const RoadMapSection: React.FC = () => {
  return (
    <RoadmapWrapper>
      <h1>ROADMAP</h1>
      <h3>WHERE DREAMS COME TRUE</h3>
      <ImageWrapper>
        <img src="/assets/images/roadmap.png" className="roadmap" alt="" />
        <img src="/assets/images/chickens/N1.png" className="chicken" alt="" />
      </ImageWrapper>
    </RoadmapWrapper>
  );
};
