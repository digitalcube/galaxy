import styled from 'styled-components';
import { components } from '../../styles';

type Heading = {
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
};

export const headingFontSize = ({ size = `md` }: Heading) => {
  return components.heading.size[size];
};

export const Heading = styled.p<Heading>`
  margin: 0;
  padding: 0;
  font-size: ${headingFontSize};
  font-weight: ${components.heading.fontWeight};
  line-height: 150%;
  position: relative;
`;
