import React from 'react';
import { ButtonMenuItems, ButtonMenuItemsProps } from './button-menu-items';

export default {
  component: ButtonMenuItems,
  title: 'Galaxy/Components/ButtonMenuItems',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ButtonMenuItemsProps = {};

  return <ButtonMenuItems />;
};
