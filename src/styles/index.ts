import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from 'styled-theming';
import { components } from './components';
import { colors } from './colors';
import { type } from './type';
import { themes } from './themes';
export { colors, components, type, themes };

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${type.fontFamily};
    background-color: ${themes.shifter.colors.background.light};
    color: inherit;
  }

  /* a {
    color: black;
    text-decoration: none;
  } */

  h3 {
    color: ${type.heading.color};
    font-style: ${type.heading.fontStyle};
    font-weight: ${type.heading.fontWeight};
    font-size: ${type.heading.h3.fontSize};
    margin: 0;
  }
`;
