import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link as ReactRouterLink,
  Redirect,
} from 'react-router-dom';
import { Dashboard } from '@galaxy/views';
import {
  ShifterDashboardThemeProvider,
  useInternalLinkBase,
} from '@galaxy/shifter-dashboard';
import { PageSites } from './pages/sites/Sites';
import { RouteSite } from './routes/Site';
import { PageGuides } from './pages/Guides';
import { PageCreateSite } from './pages/CreateSite';
import { PageCreateTeam } from './pages/CreateTeam';
import { PageTeams } from './pages/Teams';
import { fakerAvatar } from '@galaxy/faker';

export function App() {
  const { sites, admin, teams } = useInternalLinkBase();

  const { avatar } = fakerAvatar;

  return (
    <ShifterDashboardThemeProvider internalLinkTag={ReactRouterLink}>
      <BrowserRouter>
        <Dashboard
          header={{
            avatar,
            logo: './assets/shifter-logomark.svg',
            items: [
              {
                title: 'Home',
                href: `/${admin}`,
                variant: 'ghost',
              },
              {
                title: 'Sites',
                href: `/${admin}/${sites}`,
                variant: 'ghost',
              },
              {
                title: 'Teams',
                href: `/${admin}/${teams}`,
                variant: 'ghost',
              },
              {
                title: 'Guides',
                href: `/${admin}/guides`,
                variant: 'ghost',
              },
            ],
          }}
        >
          <Switch>
            <Redirect from={`/`} exact to={`/${admin}/`} />
            <Redirect from={`/create/`} exact to={`/create/site/`} />
            <Redirect from={`/${admin}/${sites}/`} exact to={`/${admin}/`} />
            <Route path={`/${admin}/${sites}/:siteId/`} component={RouteSite} />
            <Route path={`/${admin}/guides/`} component={PageGuides} />
            <Route path={`/${admin}/teams/`} component={PageTeams} />
            <Route path={`/create/site/`} component={PageCreateSite} />
            <Route path={`/create/team/`} component={PageCreateTeam} />
            <Route path={`/${admin}/`} exact component={PageSites} />
          </Switch>
        </Dashboard>
      </BrowserRouter>
    </ShifterDashboardThemeProvider>
  );
}

export default App;
