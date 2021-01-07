import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Nav, NavLink, Box, Link, Heading } from '@galaxy/core';

export type PlanMeta = {
  href?: string;
  detailsLabel?: string;
  detailsLink?: string;
  buttonLabel?: string;
  nodes?: NavLink[];
  price?: any;
};

export const PlanMeta: FC<PlanMeta> = ({
  price,
  nodes,
  href,
  detailsLabel,
  buttonLabel,
  detailsLink,
}: PlanMeta) => {
  if (!nodes) return null;
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        textAlign: 'center',
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
        <Tabs defaultIndex={0}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              ul: {
                display: 'flex',
                listStyle: 'none',
                mt: 0,
                mb: 4,
                p: 0,
              },
              li: {
                '&:not(:first-child)': {
                  ml: 1,
                },
                '&[aria-selected="true"]': {
                  a: {
                    variant: 'buttons.ghostHover',
                  },
                },
              },
            }}
          >
            <TabList>
              <Tab>
                <Link kind="ghost">Month</Link>
              </Tab>
              <Tab>
                <Link kind="ghost">Year</Link>
              </Tab>
            </TabList>
          </Box>
          <Heading size="8">
            <TabPanel>
              <b>{price?.month}</b>
              <Heading size="2">
                / <span>month</span>
              </Heading>
            </TabPanel>
            <TabPanel>
              <b>{price?.year}</b>
              <Heading size="2">
                / <span>year</span>
              </Heading>
            </TabPanel>
          </Heading>
        </Tabs>
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
      <Link href={detailsLink} kind="ghost">
        {detailsLabel}
      </Link>
    </Box>
  );
};

PlanMeta.defaultProps = {
  detailsLabel: `View all details`,
  href: `https://go.getshifter.io`,
  detailsLink: `#static`,
  buttonLabel: `Select Tier 1`,
  price: {
    year: `$144`,
    month: `$16`,
  },
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
