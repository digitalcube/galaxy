import React, { FC } from 'react';
import { Date } from '../../components/Date';
import { Nav } from '../../components/Nav';

type PostMeta = {
  author?: string;
  date?: string;
};

export const PostMeta: FC<PostMeta> = ({ author, date }: PostMeta) => {
  const seperator = author && date ? `|` : null;
  return (
    <Nav
      sx={{
        '& > :not(:first-child)': {
          ml: 1,
        },
      }}
      kind="row"
      navItems={[
        { label: <b>{author}</b> },
        { label: seperator },
        { label: <Date>{date}</Date> },
      ]}
    />
  );
};
