import React from 'react';
import styled from 'styled-components';

type Author = {
  content: {
    name?: React.ReactNode;
  };
};

const StyledAuthor = styled.p``;

export const Author: React.FunctionComponent<Author> = ({
  content: { name = `` },
}: Author) => {
  console.log(name);
  if (!name) return null;
  return <StyledAuthor>{name}</StyledAuthor>;
};
