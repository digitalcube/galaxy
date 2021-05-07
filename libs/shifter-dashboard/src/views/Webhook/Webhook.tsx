import React, { FC } from 'react';
import { WebhookState, WebhookOptions } from '@galaxy/shifter-dashboard';
import { Section, Heading, css } from '@galaxy/core';
import { webhookTheme } from './Webhook.galaxy';
const { webhook } = webhookTheme;

export const Webhook: FC<Webhook> = ({
  title,
  url,
  state,
  event,
  variants,
}: Webhook) => {
  const webhookCss = css({ variants: variants });

  return (
    <Section className={`${webhookCss}`}>
      <Section as="span" className="space-y-2 flex flex-col">
        <Heading
          fontSize={4}
          variant="primary"
          fontWeight="strong"
          text={title}
        />
        <Heading text={event} />
        <Heading text={url} />
      </Section>
      <Section as="span" className="space-x-2 flex items-center">
        <WebhookState state={state} />
        <WebhookOptions />
      </Section>
    </Section>
  );
};

export type Webhook = {
  title?: string;
  url?: string;
  event?: string;
  variants?: any;
  variant?: string;
  state?: 'running' | 'stopped' | 'failed' | string;
};

Webhook.defaultProps = {
  variants: webhook
};