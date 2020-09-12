import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Heading, Text } from '../index';
import { Link } from '../Link';

type CardHeader = {
  title?: string;
  subtitle?: React.ReactNode;
  excerpt?: string;
  href?: string;
};

const StyledCardHeader = styled.div`
  padding-left: ${components.spacing.sm};
  padding-right: ${components.spacing.sm};
  padding-top: ${components.spacing.md};
  padding-bottom: ${components.spacing.xs};
`;

export const CardHeader: React.FC<CardHeader> = ({
  title,
  subtitle,
  excerpt,
  href,
}: CardHeader) => {
  return (
    <StyledCardHeader>
      <Link href={href}>
        <Heading size="md" as="h3">
          {title}
        </Heading>
      </Link>
      <Heading as="h4" size="sm">
        {subtitle}
      </Heading>
      <Text>{excerpt}</Text>
    </StyledCardHeader>
  );
};
