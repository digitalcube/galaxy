import { homePage } from './content';
import { MapComponents } from '@galaxy/ui';
import { ListGrid, HeroSimpleIllustration, ListGridWithIcons } from '@galaxy/ui-marketing';

export function Index() {
  return (
    <MapComponents
      getType={(x) => x.type}
      getKey={(x) => x.id}
      list={homePage}
      map={{
        List: ListGrid,
        Hero: HeroSimpleIllustration,
        ListGridWithIcons: ListGridWithIcons,
      }}
    />
  );
}

export default Index;
