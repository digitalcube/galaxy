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
    <Main title="CDN">
        <MediaCdn state={state} />
    </Main>
  );
};

export type PageCDNProps = {
  state: string;
};
