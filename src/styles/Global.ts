import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: unset;
    padding: unset;
  }

  :root {
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.rubik};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.slate[950]};
    background-color: ${({ theme }) => theme.colors.slate[50]};
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  canvas,
  svg {
    display: block;
    max-inline-size: 100%;
    block-size: auto;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  ul,
  ol {
    list-style: none;
  }

  li {
    list-style-type: none;
  }

  #root {
    isolation: isolate;
  }
`;
