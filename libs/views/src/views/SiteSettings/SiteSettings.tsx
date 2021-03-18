import React, { FC, ReactChild } from 'react';
import { Controls, Control } from '@galaxy/views';
import { Card } from '@galaxy/core';

export const SiteSettings: FC<SiteSettingsProps> = ({
  children,
}: SiteSettingsProps) => {
  return (
    <>
      <Controls>
        <Control
          title="Automatically publish new deploys"
          description="When a new deploy is generated, it will be automatically published as the live site."
          state={true}
        />
        <Control
          title="Create a WordPress backup when a new deploy is built"
          description="When a new deploy is generated, a downloadable WordPress backup will also be created."
          state={true}
        />
        <Control
          title="Prevent this site from being deleted"
          description="When a new deploy is generated, a downloadable WordPress backup will also be created."
          state={true}
        />
      </Controls>
      <Card title="Site Notification Settings">
        <Controls>
          <Control
            description="Receive notifications for this site Yes"
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
    </>
  );
};

export type SiteSettingsProps = {
  children?: ReactChild;
};
