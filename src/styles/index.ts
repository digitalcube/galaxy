import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { components } from './components';
import { colors } from './colors';
import { type } from './type';
import { themes } from './themes';
export { colors, components, type, themes };

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: ${type.fontFamily};
  }

  h3 {
    color: ${type.headings.fontColor};
    font-style: ${type.headings.fontStyle};
    font-weight: ${type.headings.fontWeight};
    font-size: ${type.headings.h3.fontSize};
  }
`;
