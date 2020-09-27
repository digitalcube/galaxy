// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Brand } from './index';

export default {
  component: Brand,
  title: `Components/Brand`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Brand />;

export const DigitalCube = () => <Brand asset="dc-mark" />;

export const Shifter = () => <Brand asset="shifter-mark" />;

export const Amimoto = () => <Brand asset="amimoto-mark" />;
