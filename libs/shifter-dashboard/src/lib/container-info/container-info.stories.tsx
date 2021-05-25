import React from 'react';
import { ContainerInfo, ContainerInfoProps } from './container-info';

export default {
  component: ContainerInfo,
  title: 'ContainerInfo',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ContainerInfoProps = {};

  return <ContainerInfo />;
};
