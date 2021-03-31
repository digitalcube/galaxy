import React, { FC } from 'react';
import { Main } from '@galaxy/views';

import {
    AddWebhook,
    Webhook,
    Webhooks
} from '@galaxy/shifter-dashboard';
import { fakerSiteWebhooks } from '@galaxy/core';

const useDummyProps = () => {
    return {
        webhooks: fakerSiteWebhooks
    }
}

export const PageWebhooks: FC = () => {
    const {
        webhooks
      } = useDummyProps()
  return (
    <Main actions={<AddWebhook />}>
        <Webhooks webhooks={webhooks} />
        <hr />
        <p><i>[Example] If webhook does not registered, should show the following view</i></p>
        <Webhooks webhooks={[]} />
    </Main>
  );
};

export type PageWebhooksProps = {
  webhooks: Webhook[]
};
