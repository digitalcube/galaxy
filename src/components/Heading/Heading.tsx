import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Heading = {
  children?: ReactChild;
  as?: string;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
};

export const headingFontSize = ({ size = `md` }: Heading) => {
  return components.heading.size[size];
};

const StyledHeading = styled.p<Heading>`
  margin: 0;
  padding: 0;
  font-size: ${headingFontSize};
  font-weight: ${components.heading.fontWeight};
  line-height: 150%;
  position: relative;
`;

export const Heading: React.FC<Heading> = ({ size, children, as }: Heading) => {
  if (!children) return null;
  return (
    <StyledHeading as={as} size={size}>
      {children}
    </StyledHeading>
  );
};
