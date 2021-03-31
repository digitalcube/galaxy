import React, { FC } from 'react';
import { Select } from '@galaxy/core';

export const SitesSort: FC<{
  handleSelect: (option: string) => void;
}> = (props) => {
  return <Select {...props} />;
};
