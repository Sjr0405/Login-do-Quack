import React, { useEffect, useState } from "react";
import { MainContainer, StyledTitle, StyledSubtitle, StyledDescription, StyledBoxContainer } from "./MainContentStyles";
import BoxContainer from "./BoxContainer/BoxContainer";

const MainContent: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Ajuste o caminho para o JSON
    fetch('/data/roadmapData.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const totalSteps = data.nodes.length;
  const completedSteps = 0; // Atualize isso com base no progresso real do usuário
  const completionPercentage = (completedSteps / totalSteps) * 100;

  return (
    <MainContainer>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledSubtitle>{data.subtitle}</StyledSubtitle>
      <StyledDescription>{data.description}</StyledDescription>
      
      <StyledBoxContainer>
        <BoxContainer
          title="Trilha"
          description="Termine todas as etapas do roadmap para ganhar a chave da trilha."
          completionPercentage={completionPercentage}
          completedSteps={completedSteps}
          totalSteps={totalSteps}
        />
      </StyledBoxContainer>
    </MainContainer>
  );
};

export default MainContent;