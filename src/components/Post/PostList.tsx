// src/components/PostList.js

import React from 'react';
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
      <h2 className={`text-blue-dark`}>{title}</h2>
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

type PostListItems = {
  content?: Array<Post['content']>;
  col?: number;
};

const PostListItems = ({ content = [], col = 4 }: PostListItems) => {
  if (!content) return null;
  return (
    <div>
      {content.map((item, i) => {
        if (!item) return null;
        return (
          <div key={i}>
            <Post
              content={{
                title: item[`title`],
                subtitle: item[`subtitle`],
                excerpt: item[`excerpt`],
                date: item[`date`],
                img: item[`img`],
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export const PostList = ({ content, title, subtitle, col }: PostList) => (
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
