import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Image } from './Image';

export default {
  component: Image,
  title: `Galaxy/Components/Image`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return (
    <Image>
      <img
        src="https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp"
        alt="Internet Society"
      />
    </Image>
  );
};

export const CustomWidth = () => {
  return (
    <Image width="50%">
      <img
        src="https://www.getshifter.io/static/3f1aa2e6f5aa25eb64f6ddf4b7e582b9/cd6dd/logo-howtospeakmachine.webp"
        alt="Internet Society"
      />
    </Image>
  );
};
