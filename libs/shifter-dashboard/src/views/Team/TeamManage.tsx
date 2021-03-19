import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const TeamManage: FC<TeamManage> = ({ label }: TeamManage) => {
  return <Button variant="ghost" label={`${label}`} />;
};

export type TeamManage = {
  label?: string;
};

TeamManage.defaultProps = {
  label: 'Manage Team',
};
