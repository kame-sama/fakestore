import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './Container';

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.slate[950]};
  font-size: 1.1rem;
`;

const Logo = styled(StyledLink)`
  font-size: 2rem;
  text-decoration: none;
`;

const Accent = styled.span`
  font-weight: 900;
`;

export default function Header({ bagItemsCount }: { bagItemsCount: number }) {
  return (
    <header>
      <HeaderContainer>
        <Logo to="/">
          FAKEst<Accent>o</Accent>re
        </Logo>
        <NavBar>
          <StyledLink to="shop">Shop</StyledLink>
          <StyledLink to="bag">Bag({bagItemsCount})</StyledLink>
        </NavBar>
      </HeaderContainer>
    </header>
  );
}
