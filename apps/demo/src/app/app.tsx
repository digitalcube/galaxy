import React from 'react';

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

export function App() {
  return (
    <ShifterThemeProvider>
      <Header />
      <PageHeader title="Title" subtitle="Sub title" />
      <Animation animation="dashboard"/>
      <Container
        as="section"
        size="4"
        sx={{
          py: 7,
          px: '5%',
        }}
      >
        <Card title="Card Title" subtitle="sub title">
          <h1>Hello</h1>
        </Card>
      </Container>
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
      <GitHubRibbon href="https://github.com/digitalcube/galaxy" target="_blank" rel="noopener noreferrer"/>
    </ShifterThemeProvider>
  );
}

export default App;
