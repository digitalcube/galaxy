import React, { FC } from 'react';
import { Main } from '@galaxy/views';

import {
  MediaCdn,
} from '@galaxy/shifter-dashboard';

const useDummyProps = () => {
    return {
        state: false
    }
}

export const PageCDN: FC = () => {
    const {
        state,
      } = useDummyProps()
  return (
    <Main>
        <MediaCdn state={state} />
    </Main>
  );
};

export type PageCDNProps = {
  state: string;
};
