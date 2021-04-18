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
    <div>
      Checkout
    </div>
  );
};

export type CheckoutProps = {
  variants?: typeof checkout;
};

Checkout.defaultProps = {
  variants: checkout,
};
