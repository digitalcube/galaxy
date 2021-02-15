import React from 'react';
import faker from 'faker';
import { Sites } from './index';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Sites,
  title: `Galaxy/Views/Sites`,
};

const props: Sites = {
  sites: [
    {
      name: 'hello world',
      url: 'https://www.google.com',
      state: 'running',
      img: 'https://s0.wp.com/mshots/v1/https://www.getshifter.io/?w=160',
    },
    {
      name: 'hola mundo',
      url: 'https://www.joogle.com',
      state: 'stopped',
      img: 'https://s0.wp.com/mshots/v1/https://www.amimoto-ami.com/?w=160',
    },
  ],
};

// random fakerGenerator
const fakerGenerator = (schema, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {})
  );
};

const siteSchema = {
  name: '{{company.companyName}}',
  url: '{{internet.url}}',
  state: 'WordPress Running',
  team: '{{company.companyName}}',
  img: 'https://s0.wp.com/mshots/v1/https://www.amimoto-ami.com/?w=160',
};

const sites = fakerGenerator(siteSchema, 1, 20);

export const Home = () => {
  return <Sites sites={sites} />;
};
