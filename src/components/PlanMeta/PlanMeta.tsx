import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { Nav } from '../Nav';
import { NavLink } from '../NavLink';
import { Box } from '../Box';
import { Link } from '../Link';
import { Heading } from '../Heading';

export type PlanMeta = {
  href?: string;
  detailsLabel?: string;
  buttonLabel?: string;
  nodes?: NavLink[];
};

export const PlanMeta: FC<PlanMeta> = ({
  nodes,
  href,
  detailsLabel,
  buttonLabel,
}: PlanMeta) => {
  if (!nodes) return null;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        '& > :not(:first-child)': {
          mt: 3,
        },
      }}
    >
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          mt: 3,
          mb: 1,
          '& > *': {
            lineHeight: 1,
          },
        }}
      >
        <Heading size="8">
          <b>$16</b>
        </Heading>
        <Heading size="2">/ month</Heading>
      </Flex>
      <Link href={href} kind="primary">
        {buttonLabel}
      </Link>
      <Nav
        sx={{
          textAlign: 'center',
          '& > a': {
            cursor: 'default',
            fontWeight: 'bold',
          },
        }}
        kind="column"
        navItems={nodes}
      />
      <Link href="#!" kind="ghost">
        {detailsLabel}
      </Link>
    </Box>
  );
};

PlanMeta.defaultProps = {
  detailsLabel: `View all details`,
  buttonLabel: `Select Tier 1`,
  nodes: [
    {
      label: `5 HB Anim`,
    },
    {
      label: `50 SX Nisi`,
    },
    {
      label: `HTTPS Culpa`,
    },
    {
      label: `Culpa Eiusmod`,
    },
  ],
};
