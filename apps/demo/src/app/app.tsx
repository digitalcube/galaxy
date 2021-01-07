import React from 'react';

import {
  Benefits,
  Card,
  Features,
  Header,
  PageHeader,
  ShifterThemeProvider,
  Testimonials,
} from '@galaxy/shifter-web';
import { Container, Grid, Content, Animation } from '@galaxy/core';
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
      <Testimonials />
      <GitHubRibbon href="https://github.com/digitalcube/galaxy" target="_blank" rel="noopener noreferrer"/>
    </ShifterThemeProvider>
  );
}

export default App;
