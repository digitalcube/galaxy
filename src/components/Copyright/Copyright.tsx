import React, { FC } from 'react';
import { components } from '../../styles';
import { Container, Brand } from '../index';

type Copyright = {};

export const Copyright: FC<Copyright> = ({}: Copyright) => {
  return (
    <Container
      sx={{
        pt: 7,
      }}
    >
      <Brand size={components.nav.link.fontSize} asset={'dc-logo'} />
    </Container>
  );
};
