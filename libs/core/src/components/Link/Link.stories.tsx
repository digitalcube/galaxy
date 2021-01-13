import React from 'react';

import { Link } from './Link';
import { Heading } from '../Heading';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Link,
  title: `Galaxy/Components/Link`,
};

export const linkData = {
  title: `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
};

export const Default = () => {
  const { title } = linkData;
  return (
    <Link>
      <Heading>{title}</Heading>
    </Link>
  );
};
