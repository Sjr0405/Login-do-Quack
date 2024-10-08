import React from "react";
import { Container } from "./style";
import Title from "./Title";
import Subtitle from "./SubtitleContainer";
import WelcomeText from "./WelcomeText/styles";

const MainContent: React.FC = () => {
  return (
    <Container>
      <Title />
      <Subtitle />
      <WelcomeText />
    </Container>
  );
};

export default MainContent;
