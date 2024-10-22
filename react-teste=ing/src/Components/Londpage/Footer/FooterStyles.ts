import styled from 'styled-components';

export const Section = styled.footer`
  grid-template-columns: repeat(12, 1fr);
  background-color: #f8f9fa;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  bottom: 0;
  width: 100%;
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 24px;
    font-weight: bold;
    color: #ff7300;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #4834d4;
    }
  }
`;

export const SocialIcons = styled.div`
  img {
    margin: 0 10px;
    width: 50px;
    height: 50px;
    color: #000;

    &:hover {
      color: #ff7300;
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 20px;

  a {
    font-size: 16px;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #ff7300;
    }
  }
`;