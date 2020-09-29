import React from 'react';
import { Hero } from '../../../components/Hero';
import { Logos } from '../../../components/Logos';
import { Benefits } from '../../../components/Benefits';
import { Solutions } from '../../../components/Solutions';
import { Features } from '../../../components/Features';
import { Testimonials } from '../../../components/Testimonials';
import { Showcase } from '../../../components/Showcase';
import { GetStarted } from '../../../components/GetStarted';
import { Brand } from '../../../components/Brand';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';

type FrontPage = {
  getStarted?: GetStarted;
  hero?: Hero;
  logos?: Logos;
  benefits?: Benefits;
  solutions?: Solutions;
  features?: Features;
  showcase?: Showcase;
  testimonials?: Testimonials;
};

export const FrontPage = ({
  getStarted,
  hero,
  logos,
  benefits,
  solutions,
  features,
  showcase,
  testimonials,
}: FrontPage) => {
  return (
    <>
      <Hero {...hero} />
      <Logos {...logos} />
      <Benefits {...benefits} />
      <Solutions {...solutions} />
      <Features {...features} />
      <Testimonials {...testimonials} />
      <Showcase {...showcase} />
      <GetStarted {...getStarted} />
    </>
  );
};

FrontPage.defaultProps = {
  getStarted: {
    title: `Ready to take your site to the next level?`,
    subtitle: `Shifter is the solution for fast, maintenance-free WordPress websites.`,
  },
  hero: {
    title: `Jamstack solutions for WordPress`,
    subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
  },
};
