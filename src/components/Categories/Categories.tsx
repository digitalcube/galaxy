import React, { FC } from 'react';
import { Container, Box, Nav, NavLink, Heading } from '../index';

export type Categories = {
  title?: string;
  nodes?: NavLink[];
};

export const Categories: FC<Categories> = ({ title, nodes }: Categories) => {
  return (
    <Container
      sx={{
        display: 'flex',
        borderTop: '1px solid #D7D7D7',
        borderBottom: '1px solid #D7D7D7',
      }}
    >
      <Container sx={{ display: 'flex' }} size="4">
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

Categories.defaultProps = {
  title: `Ex exercitation`,
};
