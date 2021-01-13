import React from 'react';
import { Team } from './Team';
import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: Team,
  title: `Shifter/Templates/Team`,
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
