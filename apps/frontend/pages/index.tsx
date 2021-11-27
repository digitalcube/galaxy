import { LabWorks as content } from '@galaxy/content';
import { MapComponents } from '@galaxy/utils';

export function Index() {
  return content.map((block) => MapComponents(block));
}

export default Index;
