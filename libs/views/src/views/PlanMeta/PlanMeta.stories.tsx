import React from 'react';

import { PlanMeta, PlanMetaProps } from './PlanMeta';

import { defaultStorybookConfig } from '../../../.storybook/docs'
export default {
  ...defaultStorybookConfig,
  component: PlanMeta,
  title: `Galaxy/Components/PlanMeta`,


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
