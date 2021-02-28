import React, { FC } from 'react';
import { Section, Heading } from '@galaxy/core';
import { Webhook, AddWebhook } from '@galaxy/views';

export const Webhooks: FC<Webhooks> = ({ webhooks, title }) => {
  const allWebhooks = webhooks.map((webhook) => {
    const { title, url, state, img, team, progress } = webhook;
    return (
      <Webhook
        title={`${title}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        team={team}
        progress={progress}
      />
    );
  });

  return (
    <Section className="space-y-10">
      <Section className="flex flex-row items-center justify-between ">
        <Heading fontSize="6" fontWeight="strong">
          {title}
        </Heading>
        <AddWebhook />
      </Section>
      <Section className="space-y-4">{allWebhooks}</Section>
    </Section>
  );
};

export type Webhooks = {
  webhooks?: any;
  title?: string;
};

Webhooks.defaultProps = {
  webhooks: {},
  title: 'Webhooks',
};
