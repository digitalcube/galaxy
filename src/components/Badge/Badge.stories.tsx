// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Badge } from './Badge';

export default {
  component: Badge,
  title: `Components/Badge`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <Badge>Default</Badge>;

export const Kinds = () => (
  <>
    <Badge kind="primary">Primary</Badge>
    <Badge kind="success">Success</Badge>
    <Badge kind="warning">Warning</Badge>
    <Badge kind="danger">Danger</Badge>
  </>
);
