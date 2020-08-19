import styled from 'styled-components';

type Image = {
  padding?: string;
};

export const Image = styled.div<Image>`
  padding: ${props => props.padding};
  img {
    width: 100%;
    height: auto;
  }
`;
