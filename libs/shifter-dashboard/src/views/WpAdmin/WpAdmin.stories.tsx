import React from 'react';
import { WpAdmin } from '@galaxy/shifter-dashboard';
import { FaWordpress } from 'react-icons/fa';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: WpAdmin,
  title: `Shifter/Dashboard/Patterns/Deploys/WpAdmin`,
};

export const Example = () => {
  return <WpAdmin />;
};

export const Icon = () => {
  return (
    <WpAdmin variant="icon">
      <FaWordpress className="text-shifter-purple-primary h-7 w-7" />
    </WpAdmin>
  );
};
