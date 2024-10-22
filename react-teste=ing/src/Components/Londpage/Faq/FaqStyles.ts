import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #1d1a37 20%, #ff7300 20%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
  z-index: 0;
  overflow: hidden; /* Evita a barra de rolagem horizontal */
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 48px;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 991px) {
    font-size: 36px;
  }
`;

export const P = styled.p`
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 991px) {
    font-size: 16px;
  }
`;

export const ImageRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  img {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #6c5ce7;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  padding: 12px 35px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: #4834d4;
    color: white;
  }
`;