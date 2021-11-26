import { data } from './content';
import { MapComponents } from '@galaxy/utils';

export function Index() {
  return data.map((block) => MapComponents(block));
}

export default Index;
