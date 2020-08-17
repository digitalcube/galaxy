import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { components, breakpoint } from './components';
import { colors } from './colors';
import { type } from './type';
import { themes } from './themes';
export { colors, components, type, themes, breakpoint };

export const GlobalStyle = createGlobalStyle`
  ${normalize}
`;
