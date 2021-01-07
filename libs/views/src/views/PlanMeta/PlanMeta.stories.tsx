import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PlanMeta, PlanMetaProps } from './PlanMeta';

export default {
  component: PlanMeta,
  title: `Galaxy/Components/PlanMeta`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const props: PlanMetaProps = {
  detailsLabel: `View all details`,
  href: `https://go.getshifter.io`,
  detailsLink: `#static`,
  buttonLabel: `Select Tier 1`,
  price: {
    year: `$144`,
    month: `$16`,
  },
  nodes: [
    {
      label: `5 HB Anim`,
    },
    {
      label: `50 SX Nisi`,
    },
    {
      label: `HTTPS Culpa`,
    },
    {
      label: `Culpa Eiusmod`,
    },
  ],
};

export const Default = () => {
  return <PlanMeta {...props} />;
};
