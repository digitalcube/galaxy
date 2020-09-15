import React from 'react';
import styled from 'styled-components';
import { Date } from '../Date';
import { Text, Card, Heading, Link } from '../';

export type Post = {
  align?: `left` | `center` | `right`;
  title?: string;
  subtitle?: string;
  excerpt?: string;
  category?: string;
  author?: string;
  date?: string;
  img?: React.ReactNode;
  href?: string;
  footer?: React.ReactChild;
};

export const Post: React.FC<Post> = ({
  align,
  title,
  subtitle,
  excerpt,
  category,
  author,
  date,
  img,
  href,
  footer,
}: Post) => {
  return (
    <StyledCard align={align} img={img} footer={footer}>
      <Heading as="p">{category}</Heading>
      <Link href={href}>
        <Heading as="h2" size="md">
          {title}
        </Heading>
      </Link>
      <Heading as="h3" size="xs">
        {subtitle}
      </Heading>
      <Text>{excerpt}</Text>
      {author}
      <Date>{date}</Date>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  font-size: 1000%;
`;
