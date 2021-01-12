import React, { FC } from 'react';
import { Card } from '@galaxy/shifter-web';
import { Container } from '@galaxy/core';
import { Layout } from '../Layout';

const PageSub: FC = (props) => {
  return (
    <Layout>
      <Container
        as="section"
        size="4"
        sx={{
          py: 7,
          px: '5%',
        }}
      >
        <Card title="Child page" subtitle="sub title">
          <pre>
            <code>{JSON.stringify(props, null, 2)}</code>
          </pre>
        </Card>
      </Container>
    </Layout>
  );
};
export default PageSub;
