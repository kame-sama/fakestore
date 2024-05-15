import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { GlobalStyles } from '../styles/Global';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
