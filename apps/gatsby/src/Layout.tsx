import React, { FC } from 'react';
import { Header } from '@galaxy/shifter-web';
import { ThemeProvider } from '@galaxy/core';
import GitHubRibbon from 'react-github-ribbons';
import { Link } from 'gatsby';

export const Layout: FC = ({ children }) => {
  return (
    <ThemeProvider linkType={Link}>
      <Header
        href="/"
        brand={<>Gatsby example</>}
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
      {children}
      <GitHubRibbon
        href="https://github.com/digitalcube/galaxy"
        target="_blank"
        rel="noopener noreferrer"
      />
    </ThemeProvider>
  );
};

export default Layout;
