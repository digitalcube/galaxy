import React, { FC, ReactChild } from 'react';
import { Controls, Control } from '@galaxy/views';

export const SiteSettings: FC<SiteSettingsProps> = ({
  children,
}: SiteSettingsProps) => {
  return (
    <Controls>
      <Control
        title="Automatically publish new deploys"
        description="when a new deploy is generated, it will be automatically published as the live site."
        state={false}
        children={<Control />}
      />
      <Control
        children={
          <>
            <Control />
            <Control />
            <Control />
          </>
        }
      />
    </Controls>
  );
};

export type SiteSettingsProps = {
  children?: ReactChild;
};
