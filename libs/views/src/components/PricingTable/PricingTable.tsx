import React, { FC, Fragment } from 'react';
import { css, Card, Heading, Button } from '@galaxy/core';
import { pricingTableTheme } from './PricingTable.galaxy';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
const { pricingTable } = pricingTableTheme;

export const PricingTable: FC<PricingTableProps> = ({
  variants,
}: PricingTableProps) => {
  const pricingTableCss = css({ variants: variants });

  const tiers = [
    {
      name: 'Free Tier',
      href: '/site/create/3/',
      priceMonthly: 'Free',
      description:
        'Our free tier for testing before upgrading and assigning a custom domain.',
    },
    {
      name: 'Tier 1',
      href: '/site/create/3/',
      priceMonthly: 16,
      description:
        'Go live with a custom domain, automated backups, collaboration tools, and more.',
    },
    {
      name: 'Tier 2',
      href: '/site/create/3/',
      priceMonthly: 24,
      description:
        'Go further with features like Shifter Webhooks, more storage and bandwidth.',
    },
    {
      name: 'Tier 3',
      href: '/site/create/3/',
      priceMonthly: 144,
      description:
        'Access to all features, expert support, more bandwidth and unlimited storage.',
    },
  ];
  const sections = [
    {
      name: 'Features',
      features: [
        {
          name: 'Molestie lobortis massa.',
          tiers: {
            'Free Tier': true,
            'Tier 1': true,
            'Tier 2': true,
            'Tier 3': true,
          },
        },
        {
          name: 'Urna purus felis.',
          tiers: {
            'Free Tier': true,
            'Tier 1': true,
            'Tier 2': true,
            'Tier 3': true,
          },
        },
        {
          name: 'Tellus pulvinar sit dictum.',
          tiers: { 'Tier 1': true, 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Convallis.',
          tiers: { 'Tier 1': 'Up to 20 users', 'Tier 2': 'Up to 50 users' },
        },
      ],
    },
    {
      name: 'Reporting',
      features: [
        {
          name: 'Adipiscing.',
          tiers: {
            'Free Tier': true,
            'Tier 1': true,
            'Tier 2': true,
            'Tier 3': true,
          },
        },
        {
          name: 'Eget risus integer.',
          tiers: { 'Tier 1': true, 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Gravida leo urna velit.',
          tiers: { 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Elementum ut dapibus mi feugiat cras nisl.',
          tiers: { 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Veniam dolor ad cillum ipsum elit.',
          tiers: { 'Tier 2': true, 'Tier 3': true },
        },
      ],
    },
    {
      name: 'Support',
      features: [
        {
          name: 'Sit dignissim.',
          tiers: {
            'Free Tier': true,
            'Tier 1': true,
            'Tier 2': true,
            'Tier 3': true,
          },
        },
        {
          name: 'Congue at nibh et.',
          tiers: { 'Tier 1': true, 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Volutpat feugiat mattis.',
          tiers: { 'Tier 1': true, 'Tier 2': true, 'Tier 3': true },
        },
        {
          name: 'Tristique pellentesque ornare diam sapien.',
          tiers: { 'Tier 2': true, 'Tier 3': true },
        },
      ],
    },
  ];

  return (
    <Card>
      <table className="w-full h-px table-fixed">
        <caption className="sr-only">Pricing plan comparison</caption>
        <thead>
          <tr className="border-t border-shifter-gray-200">
            <th scope="row">
              <Heading
                fontSize={6}
                fontWeight="strong"
                variant="primary"
                text="Static Plans"
              />
            </th>
            {tiers.map((tier) => (
              <td key={tier.name} className="p-4 text-center">
                <Heading
                  fontSize={5}
                  fontWeight="strong"
                  className="text-shifter-purple-800 mb-4"
                  text={tier.name}
                />
                <Button
                  href={tier.href}
                  variant="outlinePrimary"
                  label={`Select ${tier.name}`}
                />
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="border-t border-shifter-gray-200 divide-y divide-shifter-gray-200">
          {sections.map((section) => (
            <Fragment key={section.name}>
              <tr>
                <th
                  className="py-3 pl-6 text-gray-900 text-left"
                  colSpan={5}
                  scope="colgroup"
                >
                  {section.name}
                </th>
              </tr>
              {section.features.map((feature) => (
                <tr key={feature.name}>
                  <th
                    className="py-5 px-6 text-shifter-purple-primary text-left"
                    scope="row"
                  >
                    {feature.name}
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="py-5 px-6">
                      {typeof feature.tiers[tier.name] === 'string' ? (
                        <span className="block text-gray-700">
                          {feature.tiers[tier.name]}
                        </span>
                      ) : (
                        <>
                          {feature.tiers[tier.name] === true ? (
                            <CheckIcon
                              className="h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          )}

                          <span className="sr-only">
                            {feature.tiers[tier.name] === true
                              ? 'Included'
                              : 'Not included'}{' '}
                            in {tier.name}
                          </span>
                        </>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export type PricingTableProps = {
  variants?: any;
  variant?: string;
};

PricingTable.defaultProps = {
  variants: pricingTable,
};
