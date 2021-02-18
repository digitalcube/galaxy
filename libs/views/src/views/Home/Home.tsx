import React, { FC } from 'react';
import { Sites, Header } from '@galaxy/views';

export const Home: FC<Home> = ({ sites, header }) => {
  console.log(header);
  return (
    <>
      <Header {...header} />
      <Sites sites={sites} />
    </>
  );
};

export type Home = {
  sites?: Sites;
  header?: Header;
};
