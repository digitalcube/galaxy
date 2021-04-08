import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
import { webhookStateTheme } from './WebhookState.galaxy';
const { webhookState } = webhookStateTheme;

export const WebhookState: FC<WebhookState> = ({
  state,
  className,
  title,
  variants,
  variant,
}: WebhookState) => {
  if (state === 'running') {
    variant = 'success';
  }

  if (state === 'generating') {
    variant = 'active';
  }

  if (state === 'pending') {
    variant = 'warning';
  }

  if (state === 'verified') {
    variant = 'verified';
  }

  if (state === 'failed') {
    variant = 'danger';
  }

  title = title ? title : state || '';

  const webhookStateCss = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Badge
      className={`${webhookStateCss} ${className}`}
      variant={`${variant}`}
      label={title}
    />
  );
};

export type WebhookState = {
  state?: 'running' | 'stopped' | 'failed' | string;
  title?: string;
  className?: string;
  variant?: string;
  variants?: any;
};

WebhookState.defaultProps = {
  variants: webhookState,
  state: 'pending',
};
