import React, { FC } from 'react';
import classNames from 'classnames';
import { WebhookState } from '@galaxy/views';
import { Button, Section, Heading } from '@galaxy/core';
import { DotsHorizontal } from 'heroicons-react';
import { schema } from './galaxy.config.js';

export const Webhook: FC<Webhook> = ({
  title,
  url,
  team,
  variant,
  img,
  state,
  progress,
}: Webhook) => {
  return (
    <Section className={`${webhookVariants({ variant })}`}>
      <Section as="span" className="space-y-2 flex flex-col">
        <Heading fontSize="4" variant="primary" fontWeight="strong">
          {title}
        </Heading>
        <Heading>{title}</Heading>
        <Heading>{url}</Heading>
      </Section>
      <Section as="span" className="space-x-2 flex items-center">
        <WebhookState state={state} />
        <Button variant="ghost">
          <DotsHorizontal />
        </Button>
      </Section>
    </Section>
  );
};

export type Webhook = {
  img?: string;
  title: string;
  team?: string;
  url: string;
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  progress: 0 | 1 | 2 | 3 | 4 | 5 | null;
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
