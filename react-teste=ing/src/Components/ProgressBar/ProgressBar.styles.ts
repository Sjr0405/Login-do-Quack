// ProgressBar.styles.ts
import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  margin-top: 2rem;
  padding: 10px;
  background-color: #6c63ff;
  border-radius: 8px;
  position: relative;
  color: ${(props) => props.theme.colors.white};
`;

export const ProgressText = styled.span`
  font-size: 1rem;
`;

export const ProgressIndicator = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const ProgressCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  color: #6c63ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-left: 10px;
`;
