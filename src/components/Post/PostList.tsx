import React from 'react';
import styled from 'styled-components';
import { Row, Col } from '@bootstrap-styled/v4';
import { components } from './../../styles';
import { Post } from './Post';
import { Heading } from './../Heading';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Array<Post['content']>;
  col: number;
  theme?: string;
};

type PostListTitle = {
  title?: string;
};

const PostListTitle = ({ title }: PostListTitle) => {
  if (!title) return null;
  return <Heading>{title}</Heading>;
};

type PostListSubtitle = {
  subtitle?: string;
};

const PostListSubtitle = ({ subtitle }: PostListSubtitle) => {
  if (!subtitle) return null;
  return <p>{subtitle}</p>;
};

const StyledPostListItems = styled.section``;

type PostListItems = {
  content?: Array<string>;
  col?: number;
  theme?: string;
};

const PostListItems = ({
  content = [],
  col = 4,
  theme = ``,
}: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      <Row>
        {content.map((item, i) => (
          <Col key={i} md={col}>
            <Post
              theme={theme}
              content={{
                title: item[`title`],
                subtitle: item[`subtitle`],
                excerpt: item[`excerpt`],
                date: item[`date`],
                author: item[`author`],
                link: item[`link`],
                img: item[`img`],
              }}
            />
          </Col>
        ))}
      </Row>
    </StyledPostListItems>
  );
};

const StyledPostList = styled.section`
  padding: ${components.section.padding.md} 0;
`;

export const PostList = ({
  content,
  title = ``,
  subtitle = ``,
  col,
  theme,
}: PostList) => (
  <StyledPostList>
    <PostListTitle title={title} />
    <PostListSubtitle subtitle={subtitle} />
    <PostListItems theme={theme} content={content} col={col} />
  </StyledPostList>
);
