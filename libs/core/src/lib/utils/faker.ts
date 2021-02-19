import faker from 'faker';

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

const state = ['running', 'stopped', 'generating', 'starting'];

export const fakerGenerator = (schema = {}, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      if (key === 'state') {
        entity[key] = fakerArray(state);
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
  name: '{{company.companyName}}',
  url: '{{internet.url}}',
  state: 'state',
  team: '{{company.companyName}}',
  img: '{{image.image}}',
  progress: 'progress',
};

export const fakerSites = fakerGenerator(siteSchema, 1, 20);

const items = {
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
  ...items,
  ...avatar,
};
