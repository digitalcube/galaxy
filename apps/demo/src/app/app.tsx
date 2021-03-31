import React, { FC } from 'react';
import { GalaxyThemeProvider, Link, MenuItems, Panel } from '@galaxy/core';
import {
  BrowserRouter,
  Route,
  Switch,
  Link as ReactRouterLink,
  Redirect,
} from 'react-router-dom';
import {
  Dashboard, Aside, Main
} from '@galaxy/views'
import { ShifterDashboardThemeProvider, useInternalLinkBase } from '@galaxy/shifter-dashboard'
import { PageSites } from './pages/sites/Sites'
import { RouteSite } from './routes/Site';

export function App() {
  const {
    sites, admin,
  } = useInternalLinkBase()
  return (
    <ShifterDashboardThemeProvider internalLinkTag={ReactRouterLink}>
      <BrowserRouter>
        <Dashboard header={{
          items: [{
            title: 'Home',
            href: `/${admin}`
          }, {
            title: 'Sites',
            href: `/${admin}/${sites}`
          }, {
            title: 'Page2',
            href: '/page2'
          }]
        }}>
          <Switch>
            <Redirect from={`/`} exact to={`/${admin}`}  />
            <Redirect from={`/${admin}/${sites}`} exact to={`/${admin}`}  />
            <Route path={`/${admin}/${sites}/:siteId`} component={RouteSite} />
            <Route path={`/${admin}`} exact component={PageSites} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </ShifterDashboardThemeProvider>
  );
}

export default App;
