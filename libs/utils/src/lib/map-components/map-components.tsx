import React from 'react';
import * as UiMarketing from '@galaxy/ui-marketing';

const Components: { [key: string]: unknown } = UiMarketing;
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
  return React.createElement(() => <>{JSON.stringify(props)}</>, {
    key: props._uid,
  });
}

export default MapComponents;
