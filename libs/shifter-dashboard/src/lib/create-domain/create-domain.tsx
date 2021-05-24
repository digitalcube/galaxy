import React, { useMemo } from 'react';
import { Button } from '@galaxy/core';
import { useInternalLinkBase } from '@galaxy/shifter-dashboard';
import { HiOutlinePlus } from 'react-icons/hi';

export interface CreateDomainProps {
  title?: string;
  href?: string;
}
export function CreateDomain(props: CreateDomainProps) {
  const { title, href } = props;
  const { site } = useInternalLinkBase();
  const target = useMemo(() => {
    if (href) return href;
    return `/${site}/create`;
  }, [href, site]);
  return (
    <Button variant="primary" className="space-x-3 flex" href={target}>
      <HiOutlinePlus />
      <span>{title}</span>
    </Button>
  );
}

export default CreateDomain;

CreateDomain.defaultProps = {
  title: 'Add a new domain',
};
