import React from 'react';
import { GetStarted } from '../../../components/GetStarted';
import { Features as FeaturesComponent } from '../../../components/Features';

type Features = {
  getStarted?: GetStarted;
  features?: FeaturesComponent;
};

export const Features = ({ getStarted, features }: Features) => {
  return (
    <>
      <FeaturesComponent buttonLabel={''} {...features} />
      <GetStarted {...getStarted} />
    </>
  );
};
