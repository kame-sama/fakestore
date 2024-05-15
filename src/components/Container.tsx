import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: ${({ theme }) => theme.padding.container};
`;
