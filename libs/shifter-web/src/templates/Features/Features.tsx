import React from 'react';
import { GetStarted,Features as FeaturesComponent, FeaturesProps, GetStartedProps } from '@galaxy/views';

type Features = {
  getStarted?: GetStartedProps;
  features?: FeaturesProps;
};

export const Features = ({ getStarted, features }: Features) => {
  return (
    <>
      <FeaturesComponent buttonLabel={''} {...features} />
      <GetStarted {...getStarted} />
    </>
  );
};
