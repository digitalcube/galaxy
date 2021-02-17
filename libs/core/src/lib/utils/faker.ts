import faker from 'faker';

const state = ['running', 'stopped', 'generating', 'starting'];

export const fakerGenerator = (schema = {}, min = 1, max) => {
  max = max || min;
  return Array.from({ length: faker.random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      console.log(key);
      // Site state
      if (key === 'state') {
        entity[key] = fakerArray(state);
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

export const fakerProgress = (min = 1, max = 10) => {
  max = max || min;
  return `w-${faker.random.number({ min, max })}/10`;
};
