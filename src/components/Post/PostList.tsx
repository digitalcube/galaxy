// src/components/PostList.js

import React from 'react';
import styled from 'styled-components';
import { Post } from './Post';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Array<Post['content']>;
  col: number;
};

type PostListTitle = {
  title?: string;
};

const PostListTitle = ({ title }: PostListTitle) => {
  if (!title) return null;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

type PostListSubtitle = {
  subtitle?: string;
};

const PostListSubtitle = ({ subtitle }: PostListSubtitle) => {
  if (!subtitle) return null;
  return <p>{subtitle}</p>;
};

const StyledPostListItems = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > * {
    width: 32%;
    margin-bottom: 2%; /* (100-32*3)/2 */
  }
`;

type PostListItems = {
  content?: Array<string>;
  col?: number;
};

const PostListItems = ({ content = [], col = 4 }: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      {content.map((item, i) => (
        <Post
          key={i}
          content={{
            title: item[`title`],
            subtitle: item[`subtitle`],
            excerpt: item[`excerpt`],
            date: item[`date`],
            img: item[`img`],
            author: item[`author`],
          }}
        />
      ))}
    </StyledPostListItems>
  );
};

export const PostList = ({
  content,
  title = ``,
  subtitle = ``,
  col,
}: PostList) => (
  <div>
    <div>
      <div>
        <PostListTitle title={title} />
        <PostListSubtitle subtitle={subtitle} />
      </div>
    </div>
    <PostListItems content={content} col={col} />
  </div>
);
