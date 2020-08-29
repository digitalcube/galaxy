import React, { ReactChild } from 'react';
import styled from 'styled-components';
import { components } from '../../styles';

type Heading = {
  children?: ReactChild;
  as?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `p`;
  size?: `xl` | `lg` | `md` | `sm` | `xs`;
};

export const headingFontSize = ({ size = `md` }: Heading) => {
  return components.heading.size[size];
};

export const Heading: React.FC<Heading> = ({ size, children, as }: Heading) => {
  if (!children) return null;
  return (
    <StyledHeading as={as} size={size}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled(Heading)<Heading>`
  margin: 0;
  padding: 0;
  font-size: ${headingFontSize};
  font-weight: ${components.heading.fontWeight};
  line-height: 1.5;
  position: relative;
`;
