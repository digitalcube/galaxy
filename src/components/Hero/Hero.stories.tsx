import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Hero, Image } from '../index';

export default {
  component: Hero,
  title: `Components/Hero`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return (
    <Hero
      content={{
        title: 'The static site generator for WordPress sites.',
        img: (
          <Image>
            <img
              alt=""
              src="https://www.getshifter.io/static/2902f1abacb62522fbf45bfd5c5babdd/24a5b/blog-feature-statcVheadless.png"
            />
          </Image>
        ),
        subtitle: `Create or migrate WordPress sites in minutes that are scalable and secure.`,
        href: `#`,
      }}
    />
  );
};
