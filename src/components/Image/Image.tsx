import styled from 'styled-components';

type Image = {
  width?: string;
};

export const Image = styled.div<Image>`
  img {
    width: ${props => props.width || `100%`};
    height: auto;
    vertical-align: middle;
  }
`;
