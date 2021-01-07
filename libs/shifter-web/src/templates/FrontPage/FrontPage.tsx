import React from 'react';
import { Hero, Logos,Benefits,Solutions, Features,Testimonials,TestimonialsProps,Showcase,GetStarted, BenefitsProps, FeaturesProps, GetStartedProps, SolutionsProps, ShowcaseProps } from '@galaxy/views';

type FrontPage = {
  getStarted?: GetStartedProps;
  hero?: Hero;
  logos?: Logos;
  benefits?: BenefitsProps;
  solutions?: SolutionsProps;
  features?: FeaturesProps;
  showcase?: ShowcaseProps;
  testimonials?: TestimonialsProps;
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
      {testimonials ? <Testimonials {...testimonials} />: null}
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
