import { random, fake } from 'faker';

/* eslint-disable-next-line */
export interface fakerGeneratorProps {
  schema: any;
  min?: number;
  max?: number;
}

export function fakerGenerator(props: fakerGeneratorProps) {
  const { min, schema } = props;
  let { max } = props;
  max = max || min;
  return Array.from({ length: random.number({ min, max }) }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      // if (key === 'state') {
      //   // @ts-expect-error TODO: Add types.
      //   entity[key] = fakerArray(siteState);
      //   return entity;
      // }

      // if (key === 'artifactState') {
      //   // @ts-expect-error TODO: Add types.
      //   entity['state'] = fakerArray(artifactState);
      //   return entity;
      // }

      // if (key === 'progress') {
      //   // @ts-expect-error TODO: Add types.
      //   entity[key] = fakerProgress();
      //   return entity;
      // }

      // if (key === 'avatar') {
      //   // @ts-expect-error TODO: Add types.
      //   entity['img'] =
      //     fakerArray(userAvatar) +
      //     '?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';
      //   return entity;
      // }

      // if (key === 'img') {
      //   // @ts-expect-error TODO: Add types.
      //   entity[key] = fakerArray(preview);
      //   return entity;
      // }

      // if (key === 'image') {
      //   // @ts-expect-error TODO: Add types.
      //   entity[key] = fakerArray(products);
      //   return entity;
      // }

      // @ts-expect-error TODO: Add types.
      entity[key] = fake(`${schema[key]}`);
      return entity;
    }, {})
  );
}

export default fakerGenerator;
