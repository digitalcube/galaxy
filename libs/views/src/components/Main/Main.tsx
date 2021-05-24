import React, { FC, ReactNode } from 'react';
import { Section, Panel } from '@galaxy/core';

export const Main: FC<Main> = ({
  title,
  actions,
  children,
  schema,
  className,
}) => {
  if (schema === 'dashboard') {
    return (
      <Panel
        className={`flex-1 md:border-l mb-6 border-shifter-gray-200 ${className}`}
        title={`${title}`}
        actions={actions}
      >
        <Section className="space-y-4">{children ? children : null}</Section>
      </Panel>
    );
  }

  return (
    <Section
      as="main"
      className={`${className} p-8 w-full border-l border-shifter-gray-200 space-y-8`}
    >
      {children}
    </Section>
  );
};

export type Main = {
  title?: string;
  schema?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
};
