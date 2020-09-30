import React, { FC } from 'react';
import { components } from '../../styles';
import { Container } from '../../components/Container';
import { Brand } from '../../components/Brand';

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
