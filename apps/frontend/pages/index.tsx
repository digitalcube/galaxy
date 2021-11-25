import { data } from './content';
import { MapComponents } from '@galaxy/utils';

export function Index() {
  return <div>{data.map((block) => MapComponents(block))}</div>;
}

export default Index;
