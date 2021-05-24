import React, { FC } from 'react';
import { Button } from '@galaxy/core';
import { HiOutlinePlus } from 'react-icons/hi';

export const CreateDomain: FC<CreateDomain> = ({ title }: CreateDomain) => {
  return (
    <Button variant="primary" className="space-x-3 flex">
      <HiOutlinePlus />
      <span>{title}</span>
    </Button>
  );
};

type CreateDomain = {
  title?: string;
};

CreateDomain.defaultProps = {
  title: 'Add a new domain',
};
