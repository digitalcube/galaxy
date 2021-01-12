import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Team } from './Team';

export default {
  component: Team,
  title: `Shifter/Templates/Team`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Team
    {...{
      title: 'Teams',
      nodes: [
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image.png`,
        },
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image-1.png`,
        },
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image-2.png`,
        },
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image.png`,
        },
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image-1.png`,
        },
        {
          title: `Magna fugiat`,
          subtitle: `XXX`,
          img: `post-featured-image-2.png`,
        },
      ],
    }}
  />
);
