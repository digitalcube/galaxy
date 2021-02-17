import faker from 'faker';

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
