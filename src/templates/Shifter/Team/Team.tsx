import React from 'react';
import { Posts } from '../../../views/Posts';
import { Container } from '../../../components/Container';

type Team = {
  nodes?: any;
};

export const Team = ({ nodes }: Team) => {
  return (
    <>
      <Container size="4" sx={{ py: 7, px: `5%` }}>
        <Posts variant="blog" columns={[1, null, 2, null, 3]} nodes={nodes} />
      </Container>
    </>
  );
};

Team.defaultProps = {
  nodes: [
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
    {
      title: `Magna fugiat`,
      subtitle: `XXX`,
      img: `post-featured-image.png`,
    },
  ],
};
