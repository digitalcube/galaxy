import React from 'react';

import {
  Hero,
  Layout,
  Logos,
  Benefits,
  Solutions,
  Features,
  Testimonials,
  Showcase,
} from '../../components/index';

export const FrontPage = () => {
  return (
    <Layout>
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
      <Features />
      <Testimonials />
      <Showcase />
    </Layout>
  );
};
