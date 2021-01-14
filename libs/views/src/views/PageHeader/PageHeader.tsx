import React, { FC, memo } from 'react';
import { Heading, Container, Content } from '@digitalcube/galaxy-core';

export type PageHeaderProps = {
  title?: string;
  subtitle?: string;
};

export const PageHeader: FC<PageHeaderProps> = memo(({ title, subtitle }) => {
  return (
    <Container size="4">
      <Container
        size="0"
        align="left"
        sx={{
          py: 7,
          px: '5%',
        }}
      >
        <Content>
          <Heading
            as="h4"
            size="4"
            sx={{
              lineHeight: null,
            }}
          >
            <b>{title}</b>
          </Heading>
          <Heading size="5">{subtitle}</Heading>
        </Content>
      </Container>
    </Container>
  );
});
