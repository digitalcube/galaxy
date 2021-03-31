import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link as ReactRouterLink,
  Redirect,
} from 'react-router-dom';
import { Dashboard } from '@galaxy/views'
import { ShifterDashboardThemeProvider, useInternalLinkBase } from '@galaxy/shifter-dashboard'
import { PageSites } from './pages/sites/Sites'
import { RouteSite } from './routes/Site';
import { PageGuides } from './pages/Guides';

export function App() {
  const {
    sites, admin, teams,
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
            title: 'Teams',
            href: `/${admin}/${teams}`
          }, {
            title: 'Guides',
            href: `/${admin}/guides`
          }]
        }}>
          <Switch>
            <Redirect from={`/`} exact to={`/${admin}`}  />
            <Redirect from={`/${admin}/${sites}`} exact to={`/${admin}`}  />
            <Route path={`/${admin}/${sites}/:siteId`} component={RouteSite} />
            <Route path={`/${admin}/guides`} component={PageGuides} />
            <Route path={`/${admin}`} exact component={PageSites} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </ShifterDashboardThemeProvider>
  );
}

export default App;
