import React from 'react';
import { GetStarted } from '../../../components/GetStarted';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Layout } from '../../../components/Layout';
import { Features as FeaturesComponent } from '../../../components/Features';

type Features = {
  header?: Header;
  getStarted?: GetStarted;
  features?: FeaturesComponent;
  footer?: Footer;
};

export const Features = ({
  header,
  getStarted,
  footer,
  features,
}: Features) => {
  return (
    <Layout header={header} footer={footer}>
      <FeaturesComponent buttonLabel={''} {...features} />
      <GetStarted {...getStarted} />
    </Layout>
  );
};
