import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: #1D1534; /* Dark purple background color */
  position: relative;
  color: #fff; /* White text color */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 20px;
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: #fff; /* White text color */
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  z-index: 2;
  width: calc(33.333% - 20px); /* Adjusting width for 3 cards per row */
  margin: 10px;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    text-align: left; 
    font-size: 20px;
    color: #333;
    margin-bottom: 10px;  
    transition: color 0.3s ease;
    
    &:hover {
      cursor: pointer;
      color: #eb832e;
    }
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 16px;
  }

  @media (max-width: 48em) {
    width: 100%; /* Full width on small screens */
  }
`;

export const Vector = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* SVGs are behind everything */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;