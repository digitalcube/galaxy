import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { PageHeader, PageHeaderProps } from './PageHeader';

const props: PageHeaderProps = {
  title: `Et culpa minim`,
  subtitle: `Qui consequat laborum esse tempor consequat labore non duis est nulla ipsum excepteur cupidatat qui.`,
};

export default {
  component: PageHeader,
  title: `Galaxy/Views/PageHeader`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <PageHeader {...props} />;
};

export const NoSubtitle = () => {
  return <PageHeader title={props.title} />;
};
