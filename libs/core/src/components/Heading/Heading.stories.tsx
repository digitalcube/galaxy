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

export const Flows = () => {
  return (
    <Content>
      <Heading size="7">
        <b>Create Cutting Edge WordPress Sites</b>
      </Heading>
      <Heading size="5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porttitor, erat vel fermentum tempor, eros felis gravida arcu, non
        blandit ipsum leo eu orci. Sed purus tortor, vestibulum a massa eu,
        sodales feugiat nisl. Vestibulum ante ipsum primis in faucibus orci.
      </Heading>
      <Heading size="6">
        <b>Create Cutting Edge WordPress Sites</b>
      </Heading>
      <Heading size="4">Create Cutting Edge WordPress Sites</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porttitor, erat vel fermentum tempor, eros felis gravida arcu, non
        blandit ipsum leo eu orci. Sed purus tortor, vestibulum a massa eu,
        sodales feugiat nisl. Vestibulum ante ipsum primis in faucibus orci.
      </Text>
      <Heading size="2">Create Cutting Edge WordPress Sites</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        porttitor, erat vel fermentum tempor, eros felis gravida arcu, non
        blandit ipsum leo eu orci. Sed purus tortor, vestibulum a massa eu,
        sodales feugiat nisl. Vestibulum ante ipsum primis in faucibus orci.
      </Text>
    </Content>
  );
};
