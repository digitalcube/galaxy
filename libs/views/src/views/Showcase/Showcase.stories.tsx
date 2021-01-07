import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Showcase,ShowcaseProps } from './Showcase';

const props: ShowcaseProps = {
  subtitle: `Et ullamco enim Lorem irure consequat commodo officia consequat laboris excepteur culpa.`,
  buttonLabel: `Laboris labore`,
  href: `#`,
  nodes: [
    {
      title: `Soracom`,
      href: `https://example.com`,
      excerpt: `example.com`,
      img: `post-featured-image.png`,
    },
    {
      title: `Vrije Universiteit Amsterdam`,
      excerpt: `example.com`,
      href: `https://example.com`,
      img: `post-featured-image.png`,
    },
  ],
}
export default {
  component: Showcase,
  title: `Galaxy/Views/Showcase`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Showcase {...props} />;
};
