import styled from 'styled-components';
import { components, type } from '../../styles';

type Content = {
  align?: `left` | `center` | `right`;
};

export const Content = styled.div<Content>`
  text-align: ${props => props.align};
  line-height: ${components.content.lineHeight};
  font-size: ${components.content.fontSize};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: ${components.heading.lineHeight};
    font-weight: ${components.heading.fontWeight};
  }

  h4 {
    font-size: ${components.heading.size.md};
  }

  > :not(:first-child) {
    margin-top: ${components.spacing.sm};
  }
`;
