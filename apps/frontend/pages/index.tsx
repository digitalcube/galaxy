import { homePage } from './content';
import { MapComponents } from '@galaxy/ui';
import { ListGrid } from '@galaxy/ui-marketing';

export function Index() {
  return (
    <div>
      <MapComponents
        getType={(x) => x.type}
        getKey={(x) => x.id}
        list={homePage}
        map={{
          List: ListGrid,
        }}
      />
    </div>
  );
}

export default Index;
