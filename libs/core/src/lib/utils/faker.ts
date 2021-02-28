import faker from 'faker';
import { AddDomain } from '@galaxy/views';

const preview = [
  'https://s0.wp.com/mshots/v1/https://tailwindcss.com?w=160',
  'https://s0.wp.com/mshots/v1/https://jamstack.org?w=160',
  'https://s0.wp.com/mshots/v1/https://www.serverless.com?w=160',
  'https://s0.wp.com/mshots/v1/https://wordpress.org?w=160',
  'https://s0.wp.com/mshots/v1/https://www.getshifter.io?w=160',
  'https://s0.wp.com/mshots/v1/https://www.amimoto-ami.com?w=160',
  'https://s0.wp.com/mshots/v1/https://www.algolia.com?w=160',
  'https://s0.wp.com/mshots/v1/https://stripe.com?w=160',
];

const siteState = ['running', 'stopped', 'generating', 'starting'];
// const artifactState = ['published', 'scheduled', 'ready'];

export type FakerGenerator = {
  schema: any;
  min?: number;
  max?: number;
};

export const fakerGenerator = ({ schema, min = 1, max }: FakerGenerator) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      if (key === 'state') {
        console.log(entity[key]);
        entity[key] = fakerArray(siteState);
        return entity;
      }

      if (key === 'progress') {
        entity[key] = fakerProgress();
        return entity;
      }

      if (key === 'img') {
        entity[key] = fakerArray(preview);
        return entity;
      }

      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {})
  );
};

export const fakerArray = (array = []) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export const fakerProgress = (min = 0, max = 5) => {
  max = max || min;
  return faker.random.number({ min, max });
};

export const siteSchema = {
  artifact: '{{random.uuid}}',
  cloudfront: '{{internet.url}}',
  img: '{{image.image}}',
  name: '{{company.companyName}}',
  progress: 'progress',
  state: 'state',
  team: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.recent}}',
};

export const fakerSites = fakerGenerator({
  schema: siteSchema,
  min: 1,
  max: 10,
});

export const fakerSite = fakerGenerator({ schema: siteSchema })[0];

export const artifactSchema = {
  artifact: '{{random.uuid}}',
  cloudfront: '{{internet.url}}',
  img: '{{image.image}}',
  name: '{{company.companyName}}',
  progress: 'progress',
  state: 'artifactState',
  team: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.past}}',
};

export const fakerArtifacts = fakerGenerator({
  schema: artifactSchema,
  min: 0,
  max: 10,
});

export const fakerArtifact = fakerGenerator({ schema: artifactSchema })[0];

export const siteDomainSchema = {
  artifact: '{{random.uuid}}',
  cloudfront: '{{internet.url}}',
  img: '{{image.image}}',
  name: '{{company.companyName}}',
  progress: 'progress',
  state: 'state',
  team: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.past}}',
};

export const fakerSiteDomains = fakerGenerator({
  schema: siteDomainSchema,
  min: 0,
  max: 5,
});

export const fakerSiteDomain = fakerGenerator({ schema: siteDomainSchema })[0];

export const siteWebhookSchema = {
  artifact: '{{random.uuid}}',
  cloudfront: '{{internet.url}}',
  img: '{{image.image}}',
  title: '{{company.companyName}} Notification',
  event: 'Artifact Created POST',
  progress: 'progress',
  state: 'state',
  team: '{{company.companyName}}',
  url:
    '{{internet.url}}' +
    '/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX',
  date: '{{date.past}}',
};

export const fakerSiteWebhooks = fakerGenerator({
  schema: siteWebhookSchema,
  min: 0,
  max: 5,
});

export const fakerSiteWebhook = fakerGenerator({
  schema: siteWebhookSchema,
})[0];

const dashboardHeaderMenuItems = {
  items: [
    { title: 'Sites', url: 'sites' },
    { title: 'Teams', url: 'teams' },
    { title: 'Guides', url: 'guides' },
  ],
};

const avatar = {
  avatar: {
    name: faker.name.findName(),
    img:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const fakerHeader = {
  ...dashboardHeaderMenuItems,
  ...avatar,
};

const dashboardSiteMenuItems = {
  items: [
    { title: 'Home', url: 'home' },
    { title: 'Live', url: 'live' },
    { title: 'Staging', url: 'staging' },
    { title: 'Dev', url: 'dev' },
    { title: 'Team', url: 'team' },
    { title: 'Settings', url: 'settings' },
  ],
};

const dashboardContainer = {
  container: {
    title: 'Container Info',
    wpVersion: {
      title: 'WordPress version',
      version: '5.6',
    },
    phpVersion: {
      title: 'PHP Version',
      version: '8.0',
    },
  },
};

const dashboardWpControls = {
  wpControls: {
    state: 'running',
  },
};

const dashboardMediaCdn = {
  mediaCdn: {
    title: 'Media CDN is',
    state: true,
  },
};

const dashboardSiteDomainsActions = {
  actions: [{ component: AddDomain({ title: 'Add a new domain' }) }],
};

// Page: Home
export const fakerHome = {
  title: 'Overview',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
};

// Page: Live/Domains
export const fakerDomains = {
  title: 'Domains',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
};

// Page: Live/DeploySettings
export const fakerDeploySettings = {
  title: 'Deploy Settings',
  ...fakerSite,
  ...dashboardSiteMenuItems,
};

// Page: Live/Overview
export const fakerOverview = {
  title: 'Domains',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
};

// Page: Staging
export const fakerStaging = {
  title: 'Staging',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
};

// Page: Dev
export const fakerDev = {
  title: 'Development',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
  ...dashboardContainer,
  ...dashboardWpControls,
};

// Page: Dev/MediaCDN
export const fakerMediaCdn = {
  title: 'Media CDN',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
  ...dashboardContainer,
  ...dashboardWpControls,
  ...dashboardMediaCdn,
};
