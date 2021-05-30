/* eslint-disable @typescript-eslint/ban-ts-comment */
import faker from 'faker';
import { IndividualProduct } from 'schema-dts';

const preview = [
  'https://s0.wp.com/mshots/v1/https://tailwindcss.com?w=150',
  'https://s0.wp.com/mshots/v1/https://jamstack.org?w=150',
  'https://s0.wp.com/mshots/v1/https://www.serverless.com?w=150',
  'https://s0.wp.com/mshots/v1/https://wordpress.org?w=150',
  'https://s0.wp.com/mshots/v1/https://www.getshifter.io?w=150',
  'https://s0.wp.com/mshots/v1/https://www.amimoto-ami.com?w=150',
  'https://s0.wp.com/mshots/v1/https://www.algolia.com?w=150',
  'https://s0.wp.com/mshots/v1/https://stripe.com?w=150',
];

const userAvatar = [
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  'https://images.unsplash.com/photo-1507331789086-893e9003c0e2',
  'https://images.unsplash.com/photo-1546215364-12f3fff5d578',
  'https://images.unsplash.com/photo-1584088743546-db0289ee9b07',
];

const products = [
  './product-wceu-2019-shirt.png',
  './product-galaxy-mug.png',
  './product-amimoto-bauhaus-koozie.png',
  './product-shifter-pin-pack.png',
  './product-amimoto-waves-shirt.png',
  './product-shifter-sticker-pack.png',
  './product-amimoto-throw.png',
];

const domainState = ['pending', 'verified', 'failed', 'attached'];
const siteState = ['running', 'stopped', 'starting'];
const artifactState = [
  'published',
  'building',
  'deploying',
  'scheduled',
  'ready',
  'failed',
];
// const subDirectoryState = [true, false];

export type FakerGenerator = {
  schema: any;
  min?: number;
  max?: number;
};

const fakerGenerator = ({ schema, min = 1, max }: FakerGenerator) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      if (key === 'state') {
        // @ts-expect-error
        entity[key] = fakerArray(siteState);
        return entity;
      }

      if (key === 'artifactState') {
        // @ts-expect-error
        entity['state'] = fakerArray(artifactState);
        return entity;
      }

      if (key === 'progress') {
        // @ts-expect-error
        entity[key] = fakerProgress();
        return entity;
      }

      if (key === 'avatar') {
        // @ts-expect-error
        entity['img'] =
          fakerArray(userAvatar) +
          '?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
        return entity;
      }

      if (key === 'img') {
        // @ts-expect-error
        entity[key] = fakerArray(preview);
        return entity;
      }

      if (key === 'image') {
        // @ts-expect-error
        entity[key] = fakerArray(products);
        return entity;
      }

      // @ts-expect-error
      entity[key] = faker.fake(`${schema[key]}`);
      return entity;
    }, {})
  );
};

export const fakerArray = (array: any[] = []) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export const fakerProgress = (min = 0, max = 5) => {
  max = max || min;
  return faker.random.number({ min, max });
};

export const fakerDomainState = fakerArray(domainState);

const dashboardSiteControlSubDirectory = {
  subDirectory: {
    title: 'Publish deploys to a subdirectory',
    description:
      'You can publish Shifter artifacts to a subdirectory of a site you already own (for example, yoursite.com/blog)',
    options: [
      {
        label: 'Subdirectory deploy',
        state: true,
        options: {
          placeholder: '/subdirectory',
          label: 'Subdirectory',
          type: 'input',
        },
      },
    ],
  },
};

export const teamSchema = {
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

export const fakerTeams = fakerGenerator({
  schema: teamSchema,
  min: 0,
  max: 10,
});

export const fakerTeam = fakerGenerator({ schema: teamSchema })[0];

export const siteTeamMemberSchema = {
  avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  name: '{{name.findName}}',
};

export const fakerSiteTeamMembers = fakerGenerator({
  schema: siteTeamMemberSchema,
  min: 1,
  max: 5,
});

export const teamMemberSchema = {
  img:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  name: '{{name.findName}}',
};

export const fakerTeamMembers = fakerGenerator({
  schema: teamMemberSchema,
  min: 1,
  max: 5,
});

export const fakerSiteMember = fakerGenerator({
  schema: teamMemberSchema,
})[0];

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
  siteId: '{{random.uuid}}',
};

export const fakerSites = fakerGenerator({
  schema: siteSchema,
  min: 1,
  max: 10,
});

export const fakerSite = fakerGenerator({ schema: siteSchema })[0];

const postSchema = {
  img: '{{image.image}}', // deprecated
  image: '{{image.image}}',
  title: '{{company.companyName}}',
  description: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.recent}}',
};

const fakerPostList = fakerGenerator({
  schema: postSchema,
  min: 0,
  max: 10,
});

export const fakerPost = fakerGenerator({ schema: postSchema })[0];

export const individualProductSchema: IndividualProduct = {
  '@type': 'IndividualProduct',
  image: '{{image.image}}',
  name: '{{company.companyName}}',
  description: '{{company.companyName}}',
  url: '{{internet.url}}',
  offers: {
    '@type': 'Offer',
    price: '{{commerce.price}}',
  },
};

export const fakerProductCollection = fakerGenerator({
  schema: individualProductSchema,
  min: 0,
  max: 20,
});

export const fakerIndividualProduct = fakerGenerator({
  schema: individualProductSchema,
})[0];

export const guideSchema = {
  image: '{{image.image}}',
  title: '{{company.catchPhrase}}',
  description: 'This article a step-by-step guide for {{lorem.words}}',
  url: '{{internet.url}}',
  date: '{{date.recent}}',
  schema: 'Guide',
};

// export const fakerGuides = fakerGenerator({
//   schema: guideSchema,
//   min: 1,
//   max: 10,
// });

export const fakerGuides = [
  {
    date: 'Wed Apr 28 2021 00:50:15 GMT-0400 (EDT)',
    description:
      'This article a step-by-step guide for debitis commodi aliquam',
    image: './latest-banner.png',
    schema: 'Guide',
    title: 'Reverse-engineered optimizing access',
    url: 'https://terry.name',
  },
];

export const fakerGuide = fakerGenerator({ schema: guideSchema })[0];

export const artifactSchema = {
  artifact: '{{random.uuid}}',
  cloudfront: '{{internet.url}}',
  img: '{{image.image}}',
  name: '{{company.companyName}}',
  progress: 'progress',
  state: 'artifactState',
  artifactState: 'artifactState',
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
}) as any;

export const fakerSiteDomain = fakerGenerator({ schema: siteDomainSchema })[0];

export const siteControlSchema = {
  title: 'Subdirectory deploy is',
  description:
    'when a new deploy is generated, a downloadable WordPress backup will also be created.',
  state: true,
};

export const fakerSiteControls = fakerGenerator({
  schema: siteControlSchema,
  min: 1,
  max: 5,
});

export const fakerSiteControl = fakerGenerator({
  schema: siteControlSchema,
})[0];

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
  logo: './shifter-logomark.svg',
  items: [
    { label: 'Sites', href: 'sites', variant: 'ghost' },
    { label: 'Teams', href: 'teams', variant: 'ghost' },
    { label: 'Guides', href: 'guides', variant: 'ghost' },
  ],
};

const swagStoreHeaderMenuItems = {
  items: [
    { label: 'Shop all', href: 'shop-all', variant: 'link' },
    { label: 'Shop by brand', href: 'shop-brand', variant: 'link' },
    { label: 'Categories', href: 'categories', variant: 'link' },
    { label: 'About', href: 'about', variant: 'link' },
  ],
};

export const swagStoreCategories = {
  items: [
    { label: 'All Products', href: 'sites', variant: 'link' },
    { label: 'Apparel', href: 'apparel', variant: 'link' },
    { label: 'Objects', href: 'objects', variant: 'link' },
    { label: 'Stickers', href: 'stickers', variant: 'link' },
    { label: 'Prints', href: 'prints', variant: 'link' },
  ],
};

export const fakerAvatar = {
  avatar: {
    size: 9,
    name: faker.name.findName(),
    menu: [
      { label: 'Account', href: '/admin/account' },
      { label: 'Log out', href: '/log-out' },
    ],
    img:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
};

export const fakerHeader = {
  ...dashboardHeaderMenuItems,
  ...fakerAvatar,
};

export const fakerDashboardHeader = {
  ...dashboardHeaderMenuItems,
  ...fakerAvatar,
};

export const fakerSwagStoreHeader = {
  ...swagStoreHeaderMenuItems,
  ...fakerAvatar,
};

const dashboardSiteMenuItems = {
  items: [
    { label: 'Home', href: 'home', variant: 'ghost' },
    { label: 'Live', href: 'live', variant: 'ghost' },
    { label: 'Staging', href: 'staging', variant: 'ghost' },
    { label: 'Dev', href: 'dev', variant: 'ghost' },
    { label: 'Team', href: 'team', variant: 'ghost' },
    { label: 'Settings', href: 'settings', variant: 'ghost' },
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
  actions: null,
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
  ...dashboardSiteControlSubDirectory,
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

// Page: Settings
export const fakerSettings = {
  title: 'Settings',
  ...fakerSite,
  ...dashboardSiteDomainsActions,
  ...dashboardSiteMenuItems,
};
