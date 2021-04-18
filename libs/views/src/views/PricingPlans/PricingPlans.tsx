import React, { FC } from 'react';
import {
  css,
  Card,
  Heading,
  Button,
  FreeTierIcon,
  Section,
} from '@galaxy/core';
import { pricingPlansTheme } from './PricingPlans.galaxy';
const { pricingPlans } = pricingPlansTheme;

export const PricingPlans: FC<PricingPlansProps> = ({ variants }: PricingPlansProps) => {
  const pricingPlansCss = css({ variants: variants });

  const tiers = [
    {
      name: 'Free Tier',
      href: '/create/3/',
      priceMonthly: 'Free',
      description:
        'Our free tier for testing before upgrading and assigning a custom domain.',
      includedFeatures: [
        '1 Site',
        '5 GB Storage',
        '50 GB Bandwidth',
        'HTTPS Included',
        'Shifter Domain',
      ],
    },
    {
      name: 'Tier 1',
      href: '/create/3/',
      priceMonthly: 16,
      description:
        'Go live with a custom domain, automated backups, collaboration tools, and more.',
      includedFeatures: [
        '1 Site',
        '5 GB Storage',
        '50 GB Bandwidth',
        'HTTPS Included',
        'Shifter Domain',
      ],
    },
    {
      name: 'Tier 2',
      href: '/create/3/',
      priceMonthly: 24,
      description:
        'Go further with features like Shifter Webhooks, more storage and bandwidth.',
      includedFeatures: [
        '1 Site',
        '10 GB Storage',
        '100 GB Bandwidth',
        'HTTPS Included',
        'Custom Domain',
      ],
    },
    {
      name: 'Tier 3',
      href: '/create/3/',
      priceMonthly: 144,
      description:
        'Access to all features, expert support, more bandwidth and unlimited storage.',
      includedFeatures: [
        '1 Site',
        'Unlimited Storage',
        '1 TB Bandwidth',
        'HTTPS Included',
        'Custom Domain',
      ],
    },
  ];

  return (
    <div className="w-full mx-auto">
      <div className="sm:flex sm:flex-col sm:align-center space-y-6">
        <div className="self-center flex">
          <Button variant="primary" label="Monthly" />
          <Button variant="ghost" label="Yearly" />
        </div>
      </div>
      <div className="space-y-4 sm:mt-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            mainClassName="flex flex-col items-center text-center"
            main={
              <>
                <Section as="div" className="px-8 py-6">
                  <FreeTierIcon />
                </Section>
                <Heading
                  variant="primary"
                  fontSize={6}
                  fontWeight="strong"
                  text={tier.name}
                />
                <Heading
                  className="mt-4"
                  as="p"
                  fontSize={2}
                  text={tier.description}
                />
                <Heading
                  className="mt-10"
                  as="p"
                  variant="primary"
                  fontSize={9}
                  text={`${typeof tier.priceMonthly === 'number' ? `$` : ''}${
                    tier.priceMonthly
                  }`}
                  fontWeight="strong"
                />
                <Heading as="p" fontSize={2} text={`/month`} />
                <Button
                  variant="outlinePrimary"
                  className="mt-4"
                  href={tier.href}
                  label={`Select ${tier.name}`}
                />

                <Section as="ul" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <Heading
                      key={feature}
                      as="li"
                      fontSize={3}
                      fontWeight="strong"
                      text={feature}
                    />
                  ))}
                </Section>
                <Button
                  variant="ghost"
                  className="mt-4"
                  label="View all details"
                />
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export type PricingPlansProps = {
  variants?: typeof pricingPlans;
};

PricingPlans.defaultProps = {
  variants: pricingPlans,
};
