import { LabWorks as content } from '@galaxy/content';
import { MapComponents } from '@galaxy/utils';

export function Index(props) {
  return props.data.map((block) => MapComponents(block));;
}

export default Index;

Index.defaultProps = content;
