import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Link } from './Link';
import { Heading } from '../Heading';

export default {
  component: Link,
  title: `Galaxy/Components/Link`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
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
