import React, { FC } from 'react';
import { Controls } from '@galaxy/views';

export const SettingsPage: FC<SettingsPage> = ({ settings }) => {
  return <Controls controls={settings} />;
};

export type SettingsPage = {
  settings: any;
};
