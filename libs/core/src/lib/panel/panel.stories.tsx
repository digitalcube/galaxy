import React from 'react';
import { Panel, PanelProps } from './panel';

export default {
  component: Panel,
  title: 'Panel',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: PanelProps = {};

  return <Panel />;
};
