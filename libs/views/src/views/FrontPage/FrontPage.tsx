import React, { FC } from 'react';
import { Hero } from '../Hero';
import { Layout } from '../Layout';
import { Logos } from '../Logos';
import { Benefits } from '../Benefits';
import { Solutions } from '../Solutions';
import { Features } from '../Features';
import { Testimonials, TestimonialsProps } from '../Testimonials';
import { Showcase } from '../Showcase';
import { HeaderProps } from '../Header';

export const FrontPage: FC<{
  testimoninals?: TestimonialsProps
  header: HeaderProps
}> = ({testimoninals, header}) => {
  return (
    <Layout header={header} >
      <Hero />
      <Logos />
      <Benefits />
      <Solutions />
      <Benefits />
      <Features />
      {testimoninals ? <Testimonials {...testimoninals} />: null}
      <Showcase />
    </Layout>
  );
};
