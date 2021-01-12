import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { QuickLinks, QuickLinksProps } from './QuickLinks';

export default {
  component: QuickLinks,
  title: `Galaxy/Views/QuickLinks`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const props: QuickLinksProps = {
  title: `Esse excepteur`,
  nav: [
    {
      label: `Duis Adipisicing`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Consequat`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Et Tempor`,
      href: `#!`,
      kind: `primary`,
    },
    {
      label: `Cupidatat`,
      href: `#!`,
      kind: `primary`,
    },
  ],
};

export const Default = () => {
  return <QuickLinks {...props} />;
};
