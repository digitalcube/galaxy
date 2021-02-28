import React, { FC, ReactNode } from 'react';
import { Section, Panel } from '@galaxy/core';

export const Main: FC<Main> = ({ title, actions, children }) => {
  return (
    <Panel
      className="flex-1 md:border-l mb-6"
      title={`${title}`}
      actions={actions}
    >
      <Section className="space-y-4">{children ? children : null}</Section>
    </Panel>
  );
};

export type Main = {
  title?: string;
  actions?: any;
  children: ReactNode;
};
