import styled from 'styled-components';

export const Section = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px 40px;
  position: relative;
  bottom: 0;
  width: 100%;
  overflow-x: hidden; /* Evita a barra de rolagem horizontal */
  font-family: 'Arial', sans-serif; /* Fonte agradável */
`;

export const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #333;

  @media (max-width: 48em) {
    width: 90%;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
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
  display: flex;
  align-items: center;
  margin: 1rem auto;

  a {
    margin: 0 10px;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 30px;
      height: 30px;
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
    transition: color 0.3s;

    &:hover {
      color: #ff7300;
    }
  }

  @media (max-width: 48em) {
    display: none;
  }
`;

export const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;