import React from 'react';
// import { lorem } from 'faker';
import { galaxy } from '../../themes/galaxy';
import { Heading } from '../index';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Heading,
  title: `Galaxy/Components/Heading`,
};

const headingSizes = Object.keys(galaxy.text).map((size: Heading) => {
  return (
    <div>
      {/* {lorem.sentence()} */}
      <Heading fontSize={`${size}`}>heading / {size}</Heading>
    </div>
  );
});

export const Sizes = () => {
  return headingSizes;
};
