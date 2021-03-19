import React, { FC } from 'react';
import { SiteState, WpAdmin, BuildDeploy } from '@galaxy/shifter-dashboard';
import { Section } from '@galaxy/core';
import { Play, Refresh } from 'heroicons-react';

export const WpControls: FC<WpControls> = ({ state }: WpControls) => {
  return (
    <Section className="flex flex-row items-center justify-between border-b pb-6 border-shifter-gray-200">
      <Section className="flex flex-row items-center space-x-4 divide-x">
        <SiteState state={`${state}`} />
        <div className="flex flex-row items-center space-x-4 pl-4">
          <Play size={16} />
          <Refresh size={16} />
        </div>
      </Section>
      <Section className="flex items-center space-x-6">
        <WpAdmin />
        <BuildDeploy />
      </Section>
    </Section>
  );
};

export type WpControls = {
  state: string;
};

WpControls.defaultProps = {
  state: 'stopped',
};
