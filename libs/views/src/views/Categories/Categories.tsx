import React, { FC } from 'react';
import { Container, Box, Nav, NavLinkProps, Heading } from '@galaxy/core';

export type CategoriesProps = {
  title: string;
  nodes?: NavLinkProps[];
};

export const Categories: FC<CategoriesProps> = ({ title, nodes }) => {
  return (
    <Container
      sx={{
        display: 'flex',
        borderTop: '1px solid #D7D7D7',
        borderBottom: '1px solid #D7D7D7',
        flex: [2, null, null, null, 'initial'],
      }}
    >
      <Container sx={{ display: 'flex', px: '5%' }} size="4">
        <Box
          sx={{
            borderRight: '1px solid #D7D7D7',
            '& > *': {
              py: 2,
              pr: 2,
            },
          }}
        >
          <Heading
            size="2"
            sx={{
              color: 'secondary',
            }}
          >
            {title}
          </Heading>
        </Box>
        <Nav
          sx={{
            display: 'block',
            overflow: 'scroll',
            whiteSpace: 'nowrap',
            flex: [5, null, null, null, 'initial'],
            '& > *': {
              py: 2,
              pl: 2,
            },
          }}
          navItems={nodes}
          kind="row"
        />
      </Container>
    </Container>
  );
};