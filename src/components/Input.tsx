import styled from 'styled-components';

export const Input = styled.input<{ $quantity?: boolean }>`
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

  width: ${({ $quantity }) => ($quantity ? '50px' : '100%')};
  text-align: ${({ $quantity }) => ($quantity ? 'center' : 'start')};

  &[type='number'] {
    appearance: textfield;
  }

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
