import React, { FC } from 'react';
import { Features, Benefits, Card, Testimonials } from '@galaxy/shifter-web';
import { Container, Animation } from '@galaxy/core';
import { RouteComponentProps } from 'react-router-dom';
import { Layout } from '../Layout';

const PageIndex: FC = () => (
  <>
    <Benefits
      {...{
        title: `Id Lorem aliquip`,
        subtitle: `Commodo culpa deserunt id magna esse. Et dolore elit nulla veniam in anim ut est.`,
        img: <Animation animation="singleClick" />,
        nodes: [
          {
            title: `Easy installation`,
            excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
          },
          {
            title: `Collaborate`,
            excerpt: `Work with others and share access to your Shifter account using our team features.`,
          },
          {
            title: `Maintenance-free`,
            excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
          },
          {
            title: `No coding required`,
            excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
          },
        ],
      }}
    />
    <Features
      {...{
        getStarted: {
          title: `Fugiat ut ullamco aute nulla?`,
          subtitle: `Qui ut Lorem ex occaecat ea deserunt eserunt in irure ipsum veniam enim quis consequat cillum.`,
          href: `#!`,
          linkLabel: `Nisi veniam laboris`,
          variant: `0`,
        },
        features: {
          title: `Sunt deserunt`,
          subtitle: `Et cillum non cupidatat non dolore nostrud ad nisi.`,
          href: `#!`,
          buttonLabel: `Nostrud nisi`,
          columns: [1, null, null, null, 2, 4],
          nodes: [
            {
              title: `Magic Link Logins`,
              excerpt: `You’ll never forget your WordPress password on Shifter because you’ll never have to.`,
              href: `#`,
              img: `https://www.getshifter.io/static/b0d62c9540f9db3df4672e8b280c6a55/e085e/icon-API.png`,
            },
            {
              title: `Security Built-in`,
              excerpt: `Don’t spend another minute configuring security Plugins. We have you covered.`,
              href: `#`,
              img: `https://www.getshifter.io/static/b0d62c9540f9db3df4672e8b280c6a55/e085e/icon-API.png`,
            },
            {
              title: `Integrated CDN`,
              excerpt: `Deliver fast static content to site visitors anywhere in the world with low latency.`,
              href: `#`,
              img: `https://www.getshifter.io/static/b0d62c9540f9db3df4672e8b280c6a55/e085e/icon-API.png`,
            },
            {
              title: `Maintenance-free`,
              excerpt: `Never worry about security vulnerabilities from WordPress Core, themes, and outdated plugins.`,
              href: `#`,
              img: `https://www.getshifter.io/static/b0d62c9540f9db3df4672e8b280c6a55/e085e/icon-API.png`,
            },
          ],
        },
      }}
    />
    <Testimonials
      {...{
        title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
        nodes: [
          {
            img: 'user-avatar.png',
            quote:
              'Amet sint velit aliquip aute ex enim cupidatat ex Nulla nostrud proident minim do labore ipsum mollit eu voluptate. Cillum magna quis culpa in et ea laborum eiusmod reprehenderit tempor ea labore. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
            author: 'FooBarBaz',
            handle: '@ExampleFooBarBaz',
          },
        ],
      }}
    />
  </>
);

export function App() {
  return (
    <Layout>
      <PageIndex />
    </Layout>
  );
}

export default App;
