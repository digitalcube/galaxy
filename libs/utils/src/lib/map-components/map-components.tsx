import React from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import * as UiMarketing from '@galaxy/ui-marketing';

const Components: { [key: string]: any } = UiMarketing;
export interface MapComponentsProps {
  _uid: string;
  component: any;
}

export function MapComponents(props: MapComponentsProps) {
  if (typeof Components[props.component] !== 'undefined') {
    return React.createElement(Components[props.component], {
      ...props,
    });
  }
  return React.createElement(() => <>{JSON.stringify(props)}</>, {
    key: props._uid,
  });
}

export default MapComponents;
