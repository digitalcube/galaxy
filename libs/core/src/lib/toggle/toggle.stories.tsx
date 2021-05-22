import React from 'react';
import { Toggle, ToggleProps } from './toggle';

export default {
  component: Toggle,
  title: `Galaxy/Components/Toggle`,
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ToggleProps = {};

  return <Toggle />;
};