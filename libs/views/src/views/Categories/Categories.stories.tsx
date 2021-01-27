import React, { useMemo } from 'react';

import { Categories } from './Categories';
import { NavLink } from '@galaxy/core';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Categories,
  title: `Galaxy/Views/Categories`,
};

export const Default = () => {
  return <Categories title={`Ex exercitation`} />;
};

export const WithItems = () => {
  const nodes = useMemo(
    () =>
      new Array(4)
        .fill({
          label: 'Item',
          href: '#',
        })
        .map((data, i) => ({ ...data, label: `${data.label} ${i + 1}` })),
    []
  );
  return <Categories title={`Ex exercitation`} nodes={nodes} />;
};
