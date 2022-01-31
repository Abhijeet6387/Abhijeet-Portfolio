import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const handleClick = () => {
  window.location.href = "https://bit.ly/AbhijeetResume";
};
const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi,
          <br />I am Abhijeet Shankar Mishra
        </SectionTitle>
        <SectionText>
          I am a full stack developer and a competitive coder from Varanasi,
          Uttar Pradesh. I am currently pursuing B.Tech from IET Lucknow in
          Information Technology.
        </SectionText>
        <Button onClick={handleClick}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
