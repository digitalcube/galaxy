import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { components } from '../../styles';
import { Post } from './Post';
import { Heading } from '../Heading';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Post[];
  col: number;
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
};

const PostListItems = ({ content = [], col = 6 }: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      <Grid gap="1.5rem" columns="repeat(auto-fit,minmax(225px,1fr))">
        {content.map((item, i) => {
          if (!item.content) return null;
          const {
            title,
            subtitle,
            excerpt,
            category,
            author,
            date,
            img,
          } = item.content;
          return (
            <Cell key={i}>
              <Post
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
            </Cell>
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
  col,
}: PostList) => (
  <StyledPostList>
    <PostListTitle title={title} />
    <PostListSubtitle subtitle={subtitle} />
    <PostListItems content={content} col={col} />
  </StyledPostList>
);
