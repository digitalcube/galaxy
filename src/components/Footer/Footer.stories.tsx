import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Footer, Image } from '../index';

export default {
  component: Footer,
  title: `Containers/Footer`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  const content = {
    title: text(`Title`, 'The static site generator for WordPress sites.'),
    img: (
      <Image>
        <img
          alt=""
          src="https://www.getshifter.io/static/2902f1abacb62522fbf45bfd5c5babdd/24a5b/blog-feature-statcVheadless.png"
        />
      </Image>
    ),
    subtitle: text(
      `Subtitle`,
      `Create or migrate WordPress sites in minutes that are scalable and secure.`
    ),
    buttonLabel: text(`Button label`, `Get started for free`),
    href: `#`,
  };
  return <Logos content={content} />;
};
