import React from 'react';
import { Nav } from '../index';

type Tabs = {
  nodes?: any;
};

export const Tabs: React.FC<Tabs> = ({ nodes }: Tabs) => {
  console.log(nodes);
  return <Nav />;
};
