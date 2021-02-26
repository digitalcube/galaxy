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

const PanelHeader: FC<Panel> = ({ title, actions }) => {
  return (
    <Section className="mb-6 flex justify-between">
      <Heading variant="primary" fontWeight="strong" fontSize="7">
        {title}
      </Heading>
      <PanelActions actions={actions} />
    </Section>
  );
};

export const Panel: FC<Panel> = ({ children, className, title, actions }) => {
  return (
    <Section className={`${className} py-6 px-8 border-shifter-gray-200`}>
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
