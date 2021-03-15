import React, { FC } from 'react';
import { Badge, css } from '@galaxy/core';
import { webhookUrlTheme } from './WebhookUrl.galaxy';
const { webhookUrl } = webhookUrlTheme;

export const WebhookUrl: FC<WebhookUrl> = ({
  state,
  className,
  title,
  variants,
  variant,
}: WebhookUrl) => {
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

  title = title ? title : state;

  const webhookUrlCss = css({
    variant: variant,
    variants: variants,
  });

  return (
    <Badge
      className={`${webhookUrlCss} ${className}`}
      variant={`${variant}`}
      label={title}
    />
  );
};

export type WebhookUrl = {
  state: 'pending' | 'verified' | 'failed' | 'attached' | string;
  title: string;
  className?: string;
  variant?: string;
  variants?: any;
  url: string;
};

WebhookUrl.defaultProps = {
  variants: webhookUrl,
  state: 'pending',
  url: 'https://foo.bar.baz/',
};
