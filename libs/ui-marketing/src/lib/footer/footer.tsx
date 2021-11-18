import { MapComponents } from '@galaxy/ui';
import { FooterColNewsletter } from '../../index';

/* eslint-disable-next-line */
export interface FooterProps {
  pattern?: string;
}

const list = [{ id: 1, type: 'FooterColNewsletter' }];

export function Footer(props: FooterProps) {
  const { pattern } = props;
  const patternId = [list.find((i) => i.type === pattern)];
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={patternId}
        map={{
          FooterColNewsletter,
        }}
        mapDataToProps={{
          FooterColNewsletter: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Footer;
