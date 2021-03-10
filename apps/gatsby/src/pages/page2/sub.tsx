import React, { FC } from 'react';
import { Layout } from '../../Layout';

const PageSub: FC = (props) => {
  return (
    <Layout>
      <pre>
        <code>{JSON.stringify(props, null, 2)}</code>
      </pre>
    </Layout>
  );
};
export default PageSub;
