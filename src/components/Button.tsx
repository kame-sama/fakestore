import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const Button = styled.button<{ $icon?: boolean }>`
  background-color: ${({ $icon }) =>
    $icon ? theme.colors.transparent : theme.colors.slate[950]};
  color: ${({ $icon }) =>
    $icon ? theme.colors.slate[950] : theme.colors.slate[50]};
  padding: ${({ $icon }) => ($icon ? '0.5rem' : '0.5rem 1.75rem')};
  border-radius: 5px;
`;
