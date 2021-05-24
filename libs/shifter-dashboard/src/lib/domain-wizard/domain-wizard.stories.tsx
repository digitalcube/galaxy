import React from 'react';
import { DomainWizard, DomainWizardProps } from './domain-wizard';

export default {
  component: DomainWizard,
  title: 'DomainWizard',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: DomainWizardProps = {};

  return <DomainWizard />;
};
