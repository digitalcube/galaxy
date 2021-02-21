import { withKnobs } from '@storybook/addon-knobs';

const baseStorybookConfig = {
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};


export const defaultStorybookConfig = {
  ...baseStorybookConfig,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'npm install -S @galaxy/views',
      },
    },
  },
};
