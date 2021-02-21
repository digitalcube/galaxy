import React, { FC } from 'react';
import { Button } from '@galaxy/core';

export const AddDomain: FC<AddDomain> = ({ label }: AddDomain) => {
  if (!label) return null;
  return <Button variant="primary">{label}</Button>;
};

export type AddDomain = {
  label?: string;
};
