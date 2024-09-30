import React from "react";
import { Container } from "./style";
import Title from "../../Title/Title";
import Subtitle from "../../SubtitleContainer/Subtitle";
import WelcomeText from "../../WelcomeText/WelcomeText";
import ProgressBar from "../../ProgressBar/ProgressBar"; 

const MainContent: React.FC = () => {
  return (
    <Container>
      <Title />
      <Subtitle />
      <WelcomeText />
      <ProgressBar />
    </Container>
  );
};

export default MainContent;
