import React from 'react';

import { Team, TeamProps } from './Team';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Team,
  title: `Galaxy/Views/Team`,
};
const props: TeamProps = {
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

export const Default = () => {
  return <Team {...props} />;
};
