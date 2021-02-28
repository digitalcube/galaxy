import React, { FC } from 'react';
import { Section, Heading, SecurityBuiltIn } from '@galaxy/core';
import { Webhook } from '@galaxy/views';

export const Webhooks: FC<Webhooks> = ({ webhooks, title, description }) => {
  const allWebhooks = webhooks.map((webhook) => {
    const { title, url, state, img, progress, date } = webhook;
    return (
      <Webhook
        title={`${title}`}
        url={`${url}`}
        state={`${state}`}
        img={img}
        progress={progress}
        date={date}
      />
    );
  });

  const ZeroWebhooks = () => {
    return (
      <Section as="div" className="flex flex-col items-center space-y-6">
        <SecurityBuiltIn />
        <Section as="div" className="text-center">
          <Heading fontSize="4" fontWeight="strong" variant="primary">
            {title}
          </Heading>
          <Heading fontSize="3" variant="primary">
            {description}
          </Heading>
        </Section>
      </Section>
    );
  };

  const WebhookList = () => {
    return <Section className="space-y-4">{allWebhooks}</Section>;
  };

  return (
    <Section className="space-y-10">
      {webhooks.length > 0 ? <WebhookList /> : <ZeroWebhooks />}
    </Section>
  );
};

export type Webhooks = {
  webhooks?: any;
  title?: string;
  description?: string;
};

Webhooks.defaultProps = {
  webhooks: {},
  title: "You haven't created any webhooks for this site yet.",
  description: 'Go to the WordPress admin to get started.',
};
