import React, { FC } from 'react';
import { Heading } from '../Heading';
import { Container } from '../Container';
import { Content } from '../Content';

export type PageHeader = {
  title?: string;
  subtitle?: string;
};

export const PageHeader: FC<PageHeader> = ({ title, subtitle }: PageHeader) => {
  return (
    <Container size="4">
      <Container
        size="0"
        align="left"
        sx={{
          py: 7,
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
};

PageHeader.defaultProps = {
  title: `Et culpa minim`,
  subtitle: `Qui consequat laborum esse tempor consequat labore non duis est nulla ipsum excepteur cupidatat qui.`,
};
