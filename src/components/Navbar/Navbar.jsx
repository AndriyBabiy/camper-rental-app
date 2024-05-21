import { NavLink } from 'react-router-dom';
import {
  Logo,
  NavLinkStyled,
  NavLinks,
  NavbarContainer,
} from './Navbar.styled';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <NavLink to="/">CamperRental</NavLink>
      </Logo>
      <NavLinks>
        <li>
          <NavLinkStyled to="/">Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/products">Rentals</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};
