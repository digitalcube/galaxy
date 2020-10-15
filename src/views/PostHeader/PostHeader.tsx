import React, { FC } from 'react';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';
import { Container } from '../../components/Container';
import { PostMeta } from '../PostMeta';

export type PostHeader = {
  title?: string;
  subtitle?: string;
  category?: string;
  author?: string;
  date?: string;
  categories?: object;
};

export const PostHeader: FC<PostHeader> = ({
  title,
  subtitle,
  category,
  author,
  date,
}: PostHeader) => {
  return (
    <Container
      size="2"
      sx={{
        py: 7,
        px: '5%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Content
        sx={{
          display: 'flex',
          alignContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Heading
          as="h4"
          size="4"
          sx={{
            color: 'secondary',
            lineHeight: null,
          }}
        >
          {category}
        </Heading>
        <Heading
          as="h1"
          sx={{
            fontSize: [6, null, null, 7],
          }}
          size="7"
        >
          <b>{title}</b>
        </Heading>
        <Heading size="4">{subtitle}</Heading>
        <PostMeta author={author} date={date} />
      </Content>
    </Container>
  );
};

PostHeader.defaultProps = {
  title: `Cillum aliqua in occaecat esse`,
  subtitle:
    'Mollit sint amet elit mollit sunt oluptate eiusmod culpa aliqua dolor.',
  author: 'Aute Culpamagna',
  date: 'January 1, 2049',
};
