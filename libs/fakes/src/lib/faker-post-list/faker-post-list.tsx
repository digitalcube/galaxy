import { fakerGenerator } from './../faker-generator/faker-generator';

const postSchema = {
  image: '{{image.image}}',
  title: '{{company.companyName}}',
  description: '{{company.companyName}}',
  url: '{{internet.url}}',
  date: '{{date.recent}}',
};

export const fakerPostList = fakerGenerator({
  schema: postSchema,
  min: 0,
  max: 10,
});
