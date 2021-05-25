import React from 'react';
import { CreateDomain, CreateDomainProps } from './create-domain';

export default {
  component: CreateDomain,
  title: 'Shifter/Domain/CreateDomain',
};

export const Example = () => {
  /* eslint-disable-next-line */
  const props: CreateDomainProps = {};

  return <CreateDomain />;
};
