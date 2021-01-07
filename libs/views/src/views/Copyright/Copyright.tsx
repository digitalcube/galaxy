import React, { FC } from 'react';
import { useThemeUI } from 'theme-ui';
import { Container, Brand } from '@galaxy/core';

type Copyright = {};

export const Copyright: FC<Copyright> = () => {
  const context = useThemeUI();
  const { theme } = context;
  const iconSize = theme?.space ? theme?.space[2] : ``;
  return (
    <Container
      sx={{
        pt: 7,
      }}
    >
      <Brand size={`${iconSize}`} asset={'dc-logo'} />
    </Container>
  );
};
