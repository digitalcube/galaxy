import React from 'react';
import { Hero } from '../Hero';
import { Layout } from '../Layout';
import { Logos } from '../Logos';
import { Benefits } from '../Benefits';
import { Solutions } from '../Solutions';
import { Features } from '../Features';
import { Testimonials } from '../Testimonials';
import { Showcase } from '../Showcase';

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
