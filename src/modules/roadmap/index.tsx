import React, { useEffect, useState } from "react";
import { ImageWrapper, RoadmapWrapper } from "./styles";

export const RoadMapSection: React.FC = () => {
  const title1 = "ROADMAP";
  const title2 = "WHERE";
  const title3 = "DREAMS";
  const title4 = "COME";
  const title5 = "TRUE";
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const titleElem = document
      .getElementById("roadmap-title")
      ?.getBoundingClientRect().top;
    if (window.innerHeight >= Number(titleElem) && Number(titleElem) >= 0) {
      setAnim(true);
    } else {
      setAnim(false);
    }
  };
  return (
    <RoadmapWrapper id="roadmap">
      <h1 id="roadmap-title" className={anim ? "anim" : ""}>
        {title1.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
      </h1>
      <h3>
        {title2.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
        &nbsp;
        {title3.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
        &nbsp;
        {title4.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
        &nbsp;
        {title5.split("").map((item, key) => (
          <b key={key}>{item}</b>
        ))}
        &nbsp;
      </h3>

      <ImageWrapper>
        <img src="/assets/images/roadmap.png" className="roadmap" alt="" />
        <img src="/assets/images/chickens/N9.png" className="chicken" alt="" />
      </ImageWrapper>
      <div id="team"></div>
    </RoadmapWrapper>
  );
};
