import React, { FC } from 'react';
import {
  PageHeader,
  GetStarted,
  Plans,
  PlansProps,
  FeatureTable,
  BenefitsProps,
  GetStartedProps,
} from '@digitalcube/galaxy-views';

export type PricingProps = {
  title?: string;
  subtitle?: string;
  getStarted?: GetStartedProps;
  plans?: PlansProps;
  title2?: string;
  subtitle2?: string;
  plans2?: PlansProps;
  featureTable?: FeatureTable;
  benefits?: BenefitsProps;
};

export const Pricing: FC<PricingProps> = ({
  title,
  title2,
  subtitle,
  subtitle2,
  plans,
  plans2,
  getStarted,
  featureTable,
}) => {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} />
      {plans ? <Plans {...plans} /> : null}
      {featureTable ? <FeatureTable {...featureTable} /> : null}
      <PageHeader title={title2} subtitle={subtitle2} />
      {plans2 ? <Plans {...plans2} /> : null}
      <GetStarted {...getStarted} />
    </>
  );
};
