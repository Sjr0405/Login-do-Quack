import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  margin-top: 2rem;
  padding: 10px;
  background-color: #6c63ff;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  margin-left: 10px;
`;

export const ProgressText = styled.span`
  font-size: 1rem;
  text-align: left;
  margin-left: 10px;
  padding: 10px;
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProgressIndicator = styled.div`
  display: flex;
  align-items: center;
`;
