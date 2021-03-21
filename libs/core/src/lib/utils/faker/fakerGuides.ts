import { fakerGenerator } from '@galaxy/core';

export const guideSchema = {
  img: '{{image.image}}',
  title: '{{company.companyName}}',
  description: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.recent}}',
};

export const fakerGuides = fakerGenerator({
  schema: guideSchema,
  min: 0,
  max: 10,
});

export const fakerGuide = fakerGenerator({ schema: guideSchema })[0];
