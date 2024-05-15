import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1.1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.slate[950]};
  color: ${({ theme }) => theme.colors.slate[950]};
  background-color: ${({ theme }) => theme.colors.slate[50]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.slate[100]};
  }

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.slate[950]};
    background-color: ${({ theme }) => theme.colors.slate[200]};
  }
`;
