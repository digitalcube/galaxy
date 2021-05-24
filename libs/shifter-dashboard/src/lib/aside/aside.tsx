import React from 'react';
import { Aside as GalaxyAside, AsideProps as GalaxyAsideProps } from '@galaxy/views'
import { SiteState } from '../../views';

export type AsideProps = GalaxyAsideProps

export function Aside(props: AsideProps) {
  return (
    <GalaxyAside
      {...props}
      subHeading={<SiteState />}
    />
  );
}

export default Aside;
