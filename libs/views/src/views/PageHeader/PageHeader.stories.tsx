import React from 'react';

import { PageHeader, PageHeaderProps } from './PageHeader';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: PageHeader,
  title: `Galaxy/Views/PageHeader`,
};

const props: PageHeaderProps = {
  title: `Et culpa minim`,
  subtitle: `Qui consequat laborum esse tempor consequat labore non duis est nulla ipsum excepteur cupidatat qui.`,
};

export const Default = () => {
  return <PageHeader {...props} />;
};

export const NoSubtitle = () => {
  return <PageHeader title={props.title} />;
};
