import React, { FC } from 'react';
import { Flex } from 'theme-ui';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Nav, NavLinkProps, Box, Link, Heading } from '@galaxy/core';

export type PlanMetaProps = {
  href?: string;
  detailsLabel?: string;
  detailsLink?: string;
  buttonLabel?: string;
  nodes?: NavLinkProps[];
  price?: any;
};

export const PlanMeta: FC<PlanMetaProps> = ({
  price,
  nodes,
  href,
  detailsLabel,
  buttonLabel,
  detailsLink,
}) => {
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
