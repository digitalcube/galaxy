import React from 'react';
import { CreateDomain, CreateDomainProps } from './create-domain';

export default {
  component: CreateDomain,
  title: 'CreateDomain',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: CreateDomainProps = {};

  return <CreateDomain />;
};
