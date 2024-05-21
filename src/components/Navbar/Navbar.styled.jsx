import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
