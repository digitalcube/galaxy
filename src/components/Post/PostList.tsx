import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Grid, Col, Heading, Post } from '../../../galaxy';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Post[];
  footer?: Post[];
  col?: number;
  align?: string;
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
  content?: Post[];
  col?: number;
  theme?: string;
  align?: string;
  footer?: Post[];
};

const PostListItems = ({ content = [], align }: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      <Grid md={2} lg={4}>
        {content.map((node, i) => {
          if (!node.content) return null;
          const {
            title,
            subtitle,
            excerpt,
            category,
            author,
            date,
            img,
          } = node.content;
          const footer = node.footer;
          return (
            <Col key={i}>
              <Post
                align={align}
                footer={footer}
                content={{
                  title: title,
                  subtitle: subtitle,
                  excerpt: excerpt,
                  category: category,
                  author: author,
                  date: date,
                  img: img,
                }}
              />
            </Col>
          );
        })}
      </Grid>
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
  col = 4,
  align = ``,
  footer = null,
}: PostList) => {
  if (!content) return null;
  console.log(content);
  return (
    <StyledPostList>
      <PostListTitle title={title} />
      <PostListSubtitle subtitle={subtitle} />
      <PostListItems
        align={align}
        content={content}
        footer={footer}
        col={col}
      />
    </StyledPostList>
  );
};
