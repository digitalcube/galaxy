import React from 'react';
import styled from 'styled-components';
import { components } from '../../styles';
import { Grid, Col, Heading, Post } from '../index';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Post[];
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
};

const PostListItems = ({ content = [], align }: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      <Grid md={2} lg={3}>
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

const PostListWrapper = styled.section`
  padding: ${components.section.padding.md} 0;
`;

export const PostList = ({
  content,
  title = ``,
  subtitle = ``,
  col = 4,
  align = ``,
}: PostList) => {
  if (!content) return null;
  console.log(content);
  return (
    <PostListWrapper>
      <PostListTitle title={title} />
      <PostListSubtitle subtitle={subtitle} />
      <PostListItems align={align} content={content} col={col} />
    </PostListWrapper>
  );
};
