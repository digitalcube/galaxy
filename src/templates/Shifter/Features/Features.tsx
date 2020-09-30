import React from 'react';
import { GetStarted } from '../../../views/GetStarted';
import { Features as FeaturesComponent } from '../../../views/Features';

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
