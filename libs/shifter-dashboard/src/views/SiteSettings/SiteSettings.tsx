import React, { FC } from 'react';
import { Controls, Control } from '@galaxy/views';
import { Card, Button } from '@galaxy/core';

export type SiteSettingsProps = {};

export const SiteSettings: FC<SiteSettingsProps> = () => {
  return (
    <>
      <Controls>
        <Control
          label="Automatically publish new deploys"
          description="When a new deploy is generated, it will be automatically published as the live site."
          state={true}
        />
        <Control
          label="Create a WordPress backup when a new deploy is built"
          description="When a new deploy is generated, a downloadable WordPress backup will also be created."
          state={true}
        />
        <Control
          label="Prevent this site from being deleted"
          description="When a new deploy is generated, a downloadable WordPress backup will also be created."
          state={true}
        />
      </Controls>
      <Card title="Site Notification Settings">
        <Controls>
          <Control
            description="Receive notifications for this site"
            state={true}
          >
            <Control
              description="When a new deploy is generated, a downloadable WordPress backup will also be created."
              state={true}
            />
            <Control
              description="Notify me about domain changes"
              state={true}
            />
          </Control>
        </Controls>
      </Card>
      <Card
        title="Delete site"
        description="Deleting this site will also delete all site artifacts and data. This cannot be undone. Be sure to back up your site before deleting."
        main={<Button variant="outlinePrimary" label="Delete site" />}
        mainClassName="flex items-end flex-col"
      />
    </>
  );
};
