import styled from 'styled-components';
import { components } from '../../styles';

type Container = {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | `fluid`;
  align?: 'left' | 'right';
};

export const containerMaxWidth = ({ size = 'xl' }: Container) => {
  return components.container.maxWidth[size];
};

export const Container = styled.div<Container>`
  max-width: ${containerMaxWidth};
  position: relative;
  margin-left: ${props => {
    if (props.align === `left`) return `0`;
    return `auto`;
  }};
  margin-right: ${props => {
    if (props.align === `right`) return `0`;
    return `auto`;
  }};
`;
