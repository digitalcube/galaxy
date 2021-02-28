import React, { FC } from 'react';
import classNames from 'classnames';
import { Heading } from '@galaxy/core';
import { schema } from './galaxy.config.js';

export const Webhook: FC<Webhook> = ({ url, variant }: Webhook) => {
  return <Heading className={webhookUrlVariants({ variant })}>{url}</Heading>;
};

export type Webhook = {
  variant?: 'light' | 'dark' | string;
  url: string;
};

const webhookUrlVariants = ({ variant }: Webhook) => {
  const DEFAULT = schema.components.webhook.components.url.DEFAULT;
  const variants = schema.components.webhook.components.url.variants;
  const classes = {
    [`${DEFAULT}`]: true,
    [`${variants.light}`]: !variant || variant === 'light',
    [`${variants.dark}`]: variant === 'dark',
  };

  return classNames(classes);
};
