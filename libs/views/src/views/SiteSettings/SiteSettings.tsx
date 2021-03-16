import React, { FC, ReactChild } from 'react';
import { Controls, Control } from '@galaxy/views';

export const SiteSettings: FC<SiteSettingsProps> = ({
  children,
}: SiteSettingsProps) => {
  return (
    <Controls>
      <Control children={<Control />} />
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
