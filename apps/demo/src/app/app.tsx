import React, { FC } from 'react';

import {
  Features,
  Benefits,
  Card,
  Header,
  PageHeader,
  Testimonials,
  ShifterThemeProvider,
} from '@galaxy/shifter-web';
import { Container, Animation } from '@galaxy/core';
import GitHubRibbon from 'react-github-ribbons';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  RouteComponentProps,
} from 'react-router-dom'

const PageIndex: FC = () => (
  <>
    <PageHeader title="Home" subtitle="Sub title" />
    <Animation animation="dashboard"/>
    <Benefits />
    <Features />
    <Testimonials {...{
  title: `Esse reprehenderit incididunt in deserunt enim nostrud tempor proident exercitation duis dolore ullamco proident.`,
  nodes: [
  {
    img: 'user-avatar.png',
    quote:
      'Amet sint velit aliquip aute ex enim cupidatat ex Nulla nostrud proident minim do labore ipsum mollit eu voluptate. Cillum magna quis culpa in et ea laborum eiusmod reprehenderit tempor ea labore. <a href="https://wptavern.com/digitalcube-launches-shifter-serverless-hosting-for-wordpress">Read more.</a>',
    author: 'FooBarBaz',
    handle: '@ExampleFooBarBaz',
  }]}} />
  </>
)

const PageSub: FC<RouteComponentProps> = (props) => {
  return (
    <>
    <Container
      as="section"
      size="4"
      sx={{
        py: 7,
        px: '5%',
      }}
    >
      <Card title="Child page" subtitle="sub title">
        <pre><code>{JSON.stringify(props,null,2)}</code></pre>
      </Card>
    </Container>
    </>

  )
}

export function App() {
  return (
    <ShifterThemeProvider>
    <BrowserRouter>
      <Header nav={[
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
    ]
    ]} />
      <Switch>
        <Route path="/:path" component={PageSub} />
        <Route path="/" exact component={PageIndex} />
      </Switch>
    </BrowserRouter>
      <GitHubRibbon href="https://github.com/digitalcube/galaxy" target="_blank" rel="noopener noreferrer"/>
    </ShifterThemeProvider>
  );
}

export default App;
