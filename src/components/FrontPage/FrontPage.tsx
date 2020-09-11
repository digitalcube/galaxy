import React from 'react';

import { Hero, Layout, Logos, Benefits, Solutions } from '../index';

export const FrontPage = () => {
  return (
    <Layout>
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
    </Layout>
  );
};
