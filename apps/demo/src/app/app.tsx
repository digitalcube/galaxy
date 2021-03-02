import React, { FC } from 'react';

import {
  Benefits,
  Card,
  Header,
  Testimonials,
  ShifterThemeProvider,
} from '@galaxy/shifter-web';
import { Container, Animation } from '@galaxy/core';
import GitHubRibbon from 'react-github-ribbons';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Link,
} from 'react-router-dom';

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

const PageSub: FC<RouteComponentProps> = (props) => {
  return (
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
  );
};

export function App() {
  return (
    <ShifterThemeProvider linkType={Link}>
      <BrowserRouter>
        <Header
          href="/"
          brand={<>React SPA example</>}
          nav={[
            [
              {
                label: `home`,
                href: `/`,
              },
              {
                label: `page1`,
                href: `/page1`,
              },
              {
                label: `page2-sub`,
                href: `/page2/sub`,
              },
            ],
          ]}
        />
        <Switch>
          <Route path="/:path" component={PageSub} />
          <Route path="/" exact component={PageIndex} />
        </Switch>
      </BrowserRouter>
      <GitHubRibbon
        href="https://github.com/digitalcube/galaxy"
        target="_blank"
        rel="noopener noreferrer"
      />
    </ShifterThemeProvider>
  );
}

export default App;
