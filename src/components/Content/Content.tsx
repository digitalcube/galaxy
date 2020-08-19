import styled from 'styled-components';
import { components } from '../../styles';

type Content = {
  align?: `left` | `center` | `right`;
};

export const Content = styled.div<Content>`
  text-align: ${props => props.align};
  > :not(:first-child) {
    margin-top: ${components.spacing.sm};
  }
`;
