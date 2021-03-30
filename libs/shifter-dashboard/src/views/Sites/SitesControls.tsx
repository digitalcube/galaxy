import React, { FC } from 'react';
import { SitesSort, SitesCreate, SitesCreateProps } from '@galaxy/shifter-dashboard';
import { Section } from '@galaxy/core';

export type SitesControlsProps = SitesCreateProps

export const SitesControls: FC<SitesControlsProps> = (props) => {
  return (
    <Section className="flex flex-row space-x-6 justify-between">
      <SitesSort />
      <SitesCreate {...props} />
    </Section>
  );
};