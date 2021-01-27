import React, { FC } from 'react';
import {
  Hero,
  HeroProps,
  Logos,
  Benefits,
  Solutions,
  Features,
  Testimonials,
  TestimonialsProps,
  Showcase,
  GetStarted,
  BenefitsProps,
  FeaturesProps,
  GetStartedProps,
  SolutionsProps,
  ShowcaseProps,
} from '@galaxy/views';

export type FrontPageProps = {
  getStarted?: GetStartedProps;
  hero?: HeroProps;
  logos?: Logos;
  benefits?: BenefitsProps;
  solutions?: SolutionsProps;
  features?: FeaturesProps;
  showcase?: ShowcaseProps;
  testimonials?: TestimonialsProps;
};

export const FrontPage: FC<FrontPageProps> = ({
  getStarted,
  hero,
  logos,
  benefits,
  solutions,
  features,
  showcase,
  testimonials,
}) => {
  return (
    <>
      <Hero {...hero} />
      <Logos {...logos} />
      <Benefits {...benefits} />
      <Solutions {...solutions} />
      <Features {...features} />
      {testimonials ? <Testimonials {...testimonials} /> : null}
      <Showcase {...showcase} />
      <GetStarted {...getStarted} />
    </>
  );
};
