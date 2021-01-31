import React from 'react';

import { galaxy } from '../../themes/galaxy';
import { Heading, Text, Content } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Heading,
  title: `Galaxy/Components/Heading`,
};

const headingSizes = Object.keys(galaxy.text).map((size: Heading) => {
  return (
    <>
      <Heading size={`${size}`}>heading / size: {size}</Heading>
      <br />
      <Heading size={`${size}`}>
        <b>heading / {size}</b>
      </Heading>
    </>
  );
});

export const Sizes = () => {
  return headingSizes;
};
