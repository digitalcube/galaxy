import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { components } from './components';
import { colors } from './colors';
import { type } from './type';
export { colors, components, type };

export const GlobalStyle = createGlobalStyle`
  ${normalize}
`;
