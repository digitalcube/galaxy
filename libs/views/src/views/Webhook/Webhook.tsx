import React, { FC } from 'react';
import classNames from 'classnames';
import { WebhookState, WebhookOptions } from '@galaxy/views';
import { Section, Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Webhook: FC<Webhook> = ({
  title,
  url,
  variant,
  state,
  event,
}: Webhook) => {
  return (
    <Section className={`${webhookVariants({ variant })}`}>
      <Section as="span" className="space-y-2 flex flex-col">
        <Heading fontSize="4" variant="primary" fontWeight="strong">
          {title}
        </Heading>
        <Heading>{event}</Heading>
        <Heading>{url}</Heading>
      </Section>
      <Section as="span" className="space-x-2 flex items-center">
        <WebhookState state={state} />
        <WebhookOptions />
      </Section>
    </Section>
  );
};

export type Webhook = {
  title: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  event: string;
  state: 'running' | 'stopped' | string;
};

Webhook.defaultProps = {
  variant: 'light',
};

const webhookVariants = ({ variant }: Webhook) => {
  const variants = schema.components.webhook.variants;
  const DEFAULT = schema.components.webhook.DEFAULT;

  const classes = {
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
    [`${DEFAULT}`]: true,
  };

  return classNames(classes);
};
