import React, { FC } from 'react';
import { Main } from '@galaxy/views';
import { AddDomain, Domain, Domains, DomainWizard  } from '@galaxy/shifter-dashboard';
import { fakerSiteDomains } from '@galaxy/faker';

const useDummyProps = (): PageDomainProps => {
  return {
    domains: fakerSiteDomains,
  };
};
export const PageDomain: FC = () => {
  const { domains } = useDummyProps();
  return (
    <Main
      actions={<AddDomain />}
      title="Domain"
      className="p-8 w-full border-l border-shifter-gray-200 space-y-8"
    >
      <DomainWizard />
      <Domains domains={domains} />
    </Main>
  );
};

export type PageDomainProps = {
  domains: Domain[];
};
