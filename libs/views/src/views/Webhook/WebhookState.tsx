import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const WebhookState: FC<WebhookState> = ({
  state,
  variant,
  className,
}: WebhookState) => {
  return (
    <Heading
      className={`${webhookStateVariants({ variant, state })} ${className}`}
      text={state}
    />
  );
};

export type WebhookState = {
  variant?: 'light' | 'dark' | string;
  state: 'running' | 'stopped' | string;
  className?: string;
};

const webhookStateVariants = ({ variant, state }: WebhookState) => {
  const DEFAULT = schema.components.webhook.components.state.DEFAULT;
  const variants = schema.components.webhook.components.state.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light.state.running}`]: !state || state === 'running',
    [`${variants.light.state.stopped}`]: state === 'stopped',
    [`${variants.light.state.generating}`]: state === 'generating',
    [`${variants.light.state.starting}`]: state === 'starting',
  };

  return classNames(classes);
};
