import React, { FC } from 'react';
import { Controls } from '@galaxy/views';

export const SiteSettings: FC<SiteSettings> = ({ settings }) => {
  return <Controls controls={settings} />;
};

export type SiteSettings = {
  settings: any;
};
