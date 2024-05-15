import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.slate[950]};
`;

const NavBar = styled.nav`
  position: sticky;
  top: 1rem;
`;

export default function ShopNav({ categories }: { categories: string[] }) {
  return (
    <NavBar>
      <ul>
        <li>
          <StyledLink to="/shop">all</StyledLink>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <StyledLink to={`/shop/${category}`}>{category}</StyledLink>
          </li>
        ))}
      </ul>
    </NavBar>
  );
}
