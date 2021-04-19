import React, { FC } from 'react';
import {
  css,
  Card,
  Heading,
  Button,
  FreeTierIcon,
  Section,
} from '@galaxy/core';
import { checkoutTheme } from './Checkout.galaxy';
const { checkout } = checkoutTheme;

export const Checkout: FC<CheckoutProps> = ({ variants }: CheckoutProps) => {
  const checkoutCss = css({ variants: variants });
  return (
    <Section className="grid grid-cols-2 gap-6">
      <Card
        mainClassName="space-y-4"
        main={
          <>
            <Section className="flex space-x-3">
              <Heading
                text="Visa"
                fontSize={4}
                variant="primary"
                fontWeight="strong"
              />
              <Heading text="ending in 1234" fontSize={4} variant="primary" />
            </Section>
            <Section className="flex space-x-3">
              <Heading text="Expires" fontSize={4} variant="primary" />
              <Heading
                text="08/20"
                fontWeight="strong"
                fontSize={4}
                variant="primary"
              />
              <Button label="Update payment details" variant="link" />
            </Section>
          </>
        }
      />
      <Card title="Summary" className="space-y-4">
        <>
          <Section className="p-4 space-y-4">
            <Heading
              text="Example Site Name"
              fontSize={4}
              variant="primary"
              fontWeight="strong"
            />
            <Heading
              text="Shifter Static - Tier 3"
              fontSize={6}
              variant="primary"
            />
            <Section className="flex justify-between space-x-3">
              <Heading text="Monthly plan" fontSize={4} />
              <Heading
                text="$144/month"
                fontWeight="strong"
                fontSize={4}
                variant="primary"
              />
            </Section>
          </Section>
          <Section className="flex justify-between space-x-3 border-t border-shifter-gray-300 p-3">
            <Heading text="Due today" fontSize={4} />
            <Heading
              text="$144"
              fontWeight="strong"
              fontSize={7}
              variant="primary"
            />
          </Section>
          <Section className="flex justify-end p-4">
            <Button label="Complete Order" href="/create/site/4/" />
          </Section>
        </>
      </Card>
    </Section>
  );
};

export type CheckoutProps = {
  variants?: typeof checkout;
};

Checkout.defaultProps = {
  variants: checkout,
};
