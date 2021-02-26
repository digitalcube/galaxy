import React, { FC } from 'react';
import { SitesSort, WpAdmin } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const WpControls: FC = () => {
  return (
    <Section className="flex flex-row space-x-6 justify-between">
      <SitesSort />
      <WpAdmin />
    </Section>
  );
};
