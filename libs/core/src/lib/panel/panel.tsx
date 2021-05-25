import React, { ReactNode } from 'react';
import { Section, Heading } from '@galaxy/core';

/* eslint-disable-next-line */
export interface PanelProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  actions?: ReactNode;
}

export function PanelActions(props: PanelProps) {
  const { actions } = props;
  if (!actions) return null;
  return <Section>{actions}</Section>;
}

export function PanelTitle(props: PanelProps) {
  const { title } = props;
  if (!title) return null;
  return (
    <Heading
      fontWeight="strong"
      fontSize={7}
      variant="primary"
      className="text-size-7"
      text={title}
    />
  );
}

export function PanelHeader(props: PanelProps) {
  const { title, actions } = props;
  if (!title && !actions) return null;
  return (
    <Section className="mb-6 flex justify-between">
      <PanelTitle title={title} />
      <PanelActions actions={actions} />
    </Section>
  );
}

export function Panel(props: PanelProps) {
  const { title, actions, children, className } = props;
  return (
    <Section className={`py-6 px-8 flex flex-grow flex-col ${className}`}>
      <PanelHeader title={title} actions={actions} />
      <Section className="space-y-6">{children ? children : null}</Section>
    </Section>
  );
}

export default Panel;
