import React, { FC } from 'react';
import { GalaxyThemeProvider, Link, Panel } from '@galaxy/core';
import GitHubRibbon from 'react-github-ribbons';
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps,
  Link as ReactRouterLink,
} from 'react-router-dom';
import {
  Dashboard
} from '@galaxy/views'

const PageIndex: FC = () => (
  <div>
      <h1>Index</h1>
    </div>
);

const PageSub: FC<RouteComponentProps> = (props) => {
  return (
      <div>
        <pre>
          <code>{JSON.stringify(props, null, 2)}</code>
        </pre>
      </div>
  );
};

export function App() {
  return (
    <GalaxyThemeProvider internalLinkTag={ReactRouterLink}>
      <BrowserRouter>
        <Dashboard header={{
          items: [{
            title: 'Home',
            href: '/'
          }, {
            title: 'Page1',
            href: '/page1'
          }, {
            title: 'Page2',
            href: '/page2'
          }]
        }}>
            <Switch>
              <Route path="/:path" component={PageSub} />
              <Route path="/" exact component={PageIndex} />
            </Switch>
            <Panel title="Link example" actions={<div />}>
              <ul>
                <li><Link href="/page1">Page1 (Internal)</Link></li>
                <li><Link href="http://google.com">Google (external)</Link></li>
              </ul>
              
            </Panel>
          <GitHubRibbon
            href="https://github.com/digitalcube/galaxy"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Dashboard>
      </BrowserRouter>
    </GalaxyThemeProvider>
  );
}

export default App;
