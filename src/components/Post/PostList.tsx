import React from 'react';
import { Grid, Col, Heading, Post, Spacer, Content } from '../index';

type PostList = {
  title?: string;
  subtitle?: string;
  content?: Post[];
  align?: `left` | `center` | `right`;
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

type PostListTitle = {
  title?: string;
};

const PostListTitle = ({ title }: PostListTitle) => {
  if (!title) return null;
  return (
    <Heading as="h4" size="md">
      {title}
    </Heading>
  );
};

type PostListSubtitle = {
  subtitle?: string;
};

const PostListSubtitle = ({ subtitle }: PostListSubtitle) => {
  if (!subtitle) return null;
  return (
    <Heading as="p" size="sm">
      {subtitle}
    </Heading>
  );
};

type PostListItems = {
  content?: Post[];
  theme?: string;
  align?: `left` | `center` | `right`;
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

const PostListItems = ({
  content = [],
  align,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: PostListItems) => {
  if (!content) return null;
  return (
    <Grid xxs={xxs} xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      {content.map((node, i) => {
        if (!node) return null;
        const { title, subtitle, excerpt, category, author, date, img } = node;
        const footer = node.footer;
        return (
          <Col key={i}>
            <Post
              align={align}
              footer={footer}
              title={title}
              subtitle={subtitle}
              excerpt={excerpt}
              category={category}
              author={author}
              date={date}
              img={img}
            />
          </Col>
        );
      })}
    </Grid>
  );
};

const PostListHeader = ({ title, subtitle }: PostList) => {
  if (!title) return null;
  return (
    <>
      <Content>
        <PostListTitle title={title} />
        <PostListSubtitle subtitle={subtitle} />
      </Content>
      <Spacer size="xs" />
    </>
  );
};

export const PostList = ({
  content,
  title = ``,
  subtitle = ``,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  align,
}: PostList) => {
  if (!content) return null;
  return (
    <Spacer size="md">
      <PostListHeader title={title} subtitle={subtitle} />
      <PostListItems
        xxs={xxs}
        xs={xs}
        sm={sm}
        md={md}
        lg={lg}
        xl={xl}
        xxl={xxl}
        align={align}
        content={content}
      />
    </Spacer>
  );
};
