import React, { FC, ReactNode } from 'react';
import { Section, Heading, Button } from '@galaxy/core';

const PanelActions: FC<Panel> = ({ actions }) => {
  if (!actions) return null;
  return <Section>{actions}</Section>;
};

const PanelTitle: FC<Panel> = ({ title }) => {
  if (!title) return null;
  return <Heading fontWeight="strong" fontSize={7} text={title} />;
};

const PanelHeader: FC<Panel> = ({ title, actions }) => {
  if (!title && !actions) return null;
  return (
    <Section className="mb-6 flex justify-between">
      <PanelTitle title={title} />
      <PanelActions actions={actions} />
    </Section>
  );
};

export const Panel: FC<Panel> = ({ children, className, title, actions }) => {
  return (
    <Section className={`py-6 px-8 flex flex-grow flex-col ${className}`}>
      <PanelHeader title={title} actions={actions} />
      <Section className="space-y-6">{children ? children : null}</Section>
    </Section>
  );
};

export type Panel = {
  children?: ReactNode;
  className?: string;
  title?: string;
  actions?: ReactNode;
};
