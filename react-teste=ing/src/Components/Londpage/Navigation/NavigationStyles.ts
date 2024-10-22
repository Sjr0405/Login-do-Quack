import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Section = styled.section`
  width: 100%;
  background-color: transparent;
  padding: 10px 0; /* Removendo o padding lateral */
  position: relative;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Centralizando o NavBar */
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 60px;
    margin-right: 15px;
  }

  span {
    font-size: 28px;
    font-weight: bold;
    color: #FF914D;
    cursor: pointer;

    &:hover {
      color: #4834d4;
    }
  }
`;

export const Menu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: #fff;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    transition: height 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  color: #000;
  margin: 0 1.5rem;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s;
  text-transform: uppercase;

  &:hover {
    color: #4834d4;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Button = styled.button`
  color: #fff;
  background-color: #FF914D;
  font-size: 14px;
  padding: 12px 35px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
  margin-right: 20px;

  &:hover {
    background-color: #D3D3D3;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled(FaBars)`
  color: #FF914D;
  font-size: 28px;
`;