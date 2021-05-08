import React from 'react';
import { Header, Search } from '@galaxy/views';
import { Menu, Avatar } from '@galaxy/core';
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
      main={<Search variant="ghost" />}
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
