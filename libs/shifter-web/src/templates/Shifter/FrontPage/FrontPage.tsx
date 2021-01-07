import React from 'react';
import { Hero } from '../../../views/Hero';
import { Logos } from '../../../views/Logos';
import { Benefits } from '../../../views/Benefits';
import { Solutions } from '../../../views/Solutions';
import { Features } from '../../../views/Features';
import { Testimonials } from '../../../views/Testimonials';
import { Showcase } from '../../../views/Showcase';
import { GetStarted } from '../../../views/GetStarted';

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
