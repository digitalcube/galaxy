import React from 'react';
import { GetStarted,Features as FeaturesComponent } from '@galaxy/views';

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
