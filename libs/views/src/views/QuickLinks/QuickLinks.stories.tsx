import React from 'react';

import { QuickLinks, QuickLinksProps } from './QuickLinks';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: QuickLinks,
  title: `Galaxy/Views/QuickLinks`,
};

const props: QuickLinksProps = {
  title: `Esse excepteur`,
  nav: [
    {
      label: `Duis Adipisicing`,
      href: `#!`,
    },
    {
      label: `Consequat`,
      href: `#!`,
    },
    {
      label: `Et Tempor`,
      href: `#!`,
    },
    {
      label: `Cupidatat`,
      href: `#!`,
    },
  ],
};

export const Default = () => {
  return <QuickLinks {...props} />;
};
