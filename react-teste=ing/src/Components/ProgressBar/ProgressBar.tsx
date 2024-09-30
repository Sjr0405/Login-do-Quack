// ProgressBar.tsx
import React from "react";
import {
  ProgressBarContainer,
  ProgressText,
  ProgressIndicator,
  ProgressCircle,
} from "./ProgressBar.styles";

const ProgressBar: React.FC = () => (
  <ProgressBarContainer>
    <ProgressText>
      Trilha <br />
      Termine todas as etapas do roadmap para se tornar um desenvolvedor backend
    </ProgressText>
    <ProgressIndicator>
      <ProgressCircle>10</ProgressCircle>
    </ProgressIndicator>
  </ProgressBarContainer>
);

export default ProgressBar;
