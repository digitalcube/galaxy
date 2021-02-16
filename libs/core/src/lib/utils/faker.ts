import faker from 'faker';

export const fakerGenerator = (schema = {}, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      console.log(entity[key]);
      entity[key] = faker.fake(schema[key]);
      return entity;
    }, {})
  );
};
