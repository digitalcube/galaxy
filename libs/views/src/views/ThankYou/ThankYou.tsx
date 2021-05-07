import React, { FC } from 'react';
import {
  css,
  Heading,
  Button,
  Section,
} from '@galaxy/core';
import { thankYouTheme } from './ThankYou.galaxy';
const { thankYou } = thankYouTheme;

export const ThankYou: FC<ThankYouProps> = ({ variants, siteId }: ThankYouProps) => {
  const thankYouCss = css({ variants: variants });
  return (
    <Section className="space-y-6 max-w-sm text-center flex flex-col mx-auto items-center">
      <svg
        width="184"
        height="140"
        viewBox="0 0 184 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M165.497 57.1104H0V115.411H165.497V57.1104Z"
            fill="#EBE4ED"
          />
          <path
            d="M180.046 3.96582H28.5449V99.3879H180.046V3.96582Z"
            fill="#E2C9E1"
          />
          <path
            d="M176.093 7.93201V95.4221H32.4985V7.93201H176.093ZM184 0H24.5913V103.354H184V0Z"
            fill="#F80A5B"
          />
          <path
            d="M137.822 129.768H73.6158V140H137.822V129.768Z"
            fill="#E2C9E1"
          />
          <path
            d="M152.688 54.6517C128.175 85.3485 88.4023 85.3485 63.89 54.6517C88.4023 24.0341 128.175 24.0341 152.688 54.6517Z"
            fill="#EDECEC"
          />
          <path
            d="M108.17 67.5809C115.376 67.5809 121.217 61.7213 121.217 54.4931C121.217 47.2649 115.376 41.4053 108.17 41.4053C100.965 41.4053 95.1233 47.2649 95.1233 54.4931C95.1233 61.7213 100.965 67.5809 108.17 67.5809Z"
            fill="#F80A5B"
          />
          <path
            d="M118.449 102.958H93.5419V129.768H118.449V102.958Z"
            fill="#F80A5B"
          />
          <path
            d="M165.497 57.1104H0V115.411H165.497V57.1104Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M180.046 3.96582H28.5449V99.3879H180.046V3.96582Z"
            fill="#E2C9E1"
          />
          <path
            d="M176.093 7.93201V95.4221H32.4985V7.93201H176.093ZM184 0H24.5913V103.354H184V0Z"
            fill="#892885"
          />
          <path
            d="M137.822 129.768H73.6158V140H137.822V129.768Z"
            fill="#E2C9E1"
          />
          <path
            d="M152.688 54.6517C128.175 85.3485 88.4023 85.3485 63.89 54.6517C88.4023 24.0341 128.175 24.0341 152.688 54.6517Z"
            fill="#EDECEC"
          />
          <path
            d="M108.17 67.5809C115.376 67.5809 121.217 61.7213 121.217 54.4931C121.217 47.2649 115.376 41.4053 108.17 41.4053C100.965 41.4053 95.1233 47.2649 95.1233 54.4931C95.1233 61.7213 100.965 67.5809 108.17 67.5809Z"
            fill="#F80A5B"
          />
          <path
            d="M118.449 103.354H93.5419V129.847H118.449V103.354Z"
            fill="#E2C9E1"
          />
          <path
            opacity="0.8"
            d="M118.45 129.847L93.542 129.847L93.542 103.354L118.45 103.354L118.45 129.847Z"
            fill="url(#paint1_linear)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="86.2181"
            x2="165.469"
            y2="86.2181"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EBE4ED" />
            <stop offset="1" stopColor="#EBE4ED" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="106.008"
            y1="101.889"
            x2="106.008"
            y2="129.456"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#68296A" />
            <stop offset="1" stopColor="#68296A" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="184" height="140" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <Heading
        text="Thank you"
        fontWeight="strong"
        fontSize={8}
        className="text-shifter-purple-500"
      />
      <Heading
        text="Your payment has been processed and your new site has been created."
        as="p"
        fontSize={5}
        variant="primary"
      />
      <Button
          label="Go to your new site"
          variant="primary"
          className="flex mx-auto"
          // TODO: Remove demo
          href="/admin/sites/ab7edf38-3979-4357-9569-37bb9de74ecf/"
        />
    </Section>
  );
};

export type ThankYouProps = {
  variants?: any;
  variant?: string;
  siteId?: string;
};

ThankYou.defaultProps = {
  variants: thankYou,
};
