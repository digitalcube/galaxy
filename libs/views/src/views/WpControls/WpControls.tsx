import React, { FC } from 'react';
import { SiteState, WpAdmin } from '@galaxy/views';
import { Section } from '@galaxy/core';

export const WpControls: FC = ({ state }) => {
  return (
    <Section className="flex flex-row space-x-6 justify-between border-b pb-6 border-shifter-gray-200">
      <Section className="flex items-center space-x-6">
        <div className="border-r border-shifter-gray-200">
          <SiteState state={state} />
        </div>
        <WpAdmin />
      </Section>
      <Section className="flex items-center space-x-6">
        <WpAdmin />
        <WpAdmin />
      </Section>
    </Section>
  );
};

export type WpControls = {
  state: SiteState;
};
