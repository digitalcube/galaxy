import React from 'react';
import styled from 'styled-components';
import { components } from './../../styles';
import { Post } from './Post';
import { Heading } from './../Heading';

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

const PostListItems = ({ content = [], col = 4 }: PostListItems) => {
  if (!content) return null;
  return (
    <StyledPostListItems>
      <div>
        {content.map((item, i) => (
          <div key={i}>
            <Post
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
          </div>
        ))}
      </div>
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
