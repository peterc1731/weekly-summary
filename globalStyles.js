import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: ${theme.fontFamily};
    color: ${theme.colors.text};
    margin: 0;
  }
`;

export default GlobalStyle;
