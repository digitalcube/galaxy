import React, { FC } from 'react';
import {
  SitesSort,
  SitesCreate,
  SitesCreateProps,
} from '@galaxy/shifter-dashboard';
import { Section } from '@galaxy/core';

export type SitesControlsProps = SitesCreateProps & {
  handleSelect: (option: string) => void;
};

export const SitesControls: FC<SitesControlsProps> = (props) => {
  return (
    <Section className="flex flex-row flex-grow space-x-6 justify-between">
      <SitesSort {...props} />
      <SitesCreate {...props} />
    </Section>
  );
};
