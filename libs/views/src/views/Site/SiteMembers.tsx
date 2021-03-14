import React, { FC } from 'react';
import { Avatar } from '@galaxy/core';

export const SiteMembers: FC<SiteMembers> = ({ variant }: SiteMembers) => {
  return (
    <div className="flex flex-row -space-x-2 flex-initial">
      <Avatar variant={variant} name="Hello World" />
      <Avatar variant={variant} name="Hello World" />
      <Avatar variant={variant} name="Hello World" />
    </div>
  );
};

export type SiteMembers = {
  variant?: string;
};
