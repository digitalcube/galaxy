import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Team, TeamProps } from './Team';

export default {
  component: Team,
  title: `Galaxy/Views/Team`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
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
