import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { components } from './components';
import { colors } from './colors';
import { type } from './type';
import { themes } from './themes';
export { colors, components, type, themes };

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  /* body {
    font-family: ${type.fontFamily};
    background-color: ${colors.amimoto.background.dark};
    color: inherit;
  } */
`;
