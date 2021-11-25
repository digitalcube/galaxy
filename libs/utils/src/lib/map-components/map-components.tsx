import React from 'react';
import * as UiMarketing from '@galaxy/ui-marketing';

const Components: { [key: string]: any } = UiMarketing;
export interface MapComponentsProps {
  _uid: string;
  component: string;
}

export function MapComponents(props: MapComponentsProps) {
  if (typeof Components[props.component] !== 'undefined') {
    return React.createElement(Components[props.component], {
      ...props,
    });
  }
  return React.createElement(() => <div>{JSON.stringify(props)}</div>, {
    key: props._uid,
  });
}

export default MapComponents;
