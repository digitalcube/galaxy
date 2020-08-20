import styled from 'styled-components';
import { components, type } from '../../styles';

type Content = {
  align?: `left` | `center` | `right`;
};

export const Content = styled.div<Content>`
  text-align: ${props => props.align};
  line-height: ${type.lineHeight};
  > :not(:first-child) {
    margin-top: ${components.spacing.sm};
  }
`;
