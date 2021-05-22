import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import {
  AddDomain,
  Domain,
  Domains,
  DomainWizard,
  DomainWizardStepProps,
} from '@galaxy/shifter-dashboard';
import { fakerDomainWizard, fakerSiteDomains } from '@galaxy/faker';

const useDummyProps = (): PageDomainProps => {
  const { domainWizardSteps } = fakerDomainWizard;
  return {
    domains: fakerSiteDomains,
    domainWizard: domainWizardSteps,
  };
};
export const PageDomain: FC = () => {
  const { domains, domainWizard } = useDummyProps();
  return (
    <Main
      actions={<AddDomain />}
      title="Domain"
      className="p-8 w-full border-l border-shifter-gray-200 space-y-8"
    >
      <DomainWizard items={domainWizard} />
      <Domains domains={domains} />
    </Main>
  );
};

export type PageDomainProps = {
  domains: Domain[];
  domainWizard: DomainWizardStepProps[];
};
