import React from 'react';
import { Header } from '@galaxy/views';
import { Menu, Avatar, SearchBox } from '@galaxy/core';
import { fakerHeader, fakerAvatar } from '@galaxy/faker';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Header,
  title: `Galaxy/Components/Header`,
};

document.body.classList.add('bg-white');

export const Example = () => {
  return <Header {...fakerHeader} />;
};

export const Dashboard = () => {
  return (
    <Header
      className="px-8 py-6"
      mainClassName="px-8"
      main={<SearchBox variant="ghost" />}
      aside={
        <>
          <Menu />
          <Avatar {...fakerAvatar.avatar} />
        </>
      }
      {...fakerHeader}
    />
  );
};
