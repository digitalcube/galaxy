import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader, Heading } from '../index';

export default {
  component: PageHeader,
  title: `Components/Page Header`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <PageHeader>
    <Heading size="md" as="h1">
      Eiusmod laborum nulla elit Lorem nisi nisi officia est cupidatat.
    </Heading>
  </PageHeader>
);
