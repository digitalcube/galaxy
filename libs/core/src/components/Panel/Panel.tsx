import React, { FC, ReactNode, createElement } from 'react';
import { Section, Heading, Button } from '@galaxy/core';

const PanelActions: FC<Panel> = ({ actions }) => {
  if (!actions) return null;
  return (
    <Section>
      {actions.map((action) => {
        const props = action.component.props;
        return createElement(Button, { ...props });
      })}
    </Section>
  );
};

const PanelTitle: FC<Panel> = ({ title }) => {
  if (!title) return null;
  return (
    <Heading variant="primary" fontWeight="strong" fontSize="7">
      {title}
    </Heading>
  );
};

const PanelHeader: FC<Panel> = ({ title, actions }) => {
  if (!title || !actions) return null;
  return (
    <Section className="mb-6 flex justify-between">
      <PanelTitle title={title} />
      <PanelActions actions={actions} />
    </Section>
  );
};

export const Panel: FC<Panel> = ({ children, className, title, actions }) => {
  return (
    <Section
      className={`py-6 px-8 border-shifter-gray-200 flex flex-grow flex-col border-l ${className}`}
    >
      <PanelHeader title={title} actions={actions} />
      <Section className="space-y-10">{children ? children : null}</Section>
    </Section>
  );
};

export type Panel = {
  children?: ReactNode;
  className?: string;
  title?: string;
  actions?: any;
};
