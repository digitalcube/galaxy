import React from 'react';

import {
  Hero,
  Layout,
  Logos,
  Benefits,
  Solutions,
  Features,
  Showcase,
} from '../index';

export const FrontPage = () => {
  return (
    <Layout>
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
      <Features />
      <Showcase />
    </Layout>
  );
};
