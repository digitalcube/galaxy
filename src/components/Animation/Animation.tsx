import React from 'react';
import Lottie from 'react-lottie';
import { singleClick, dashboard } from './animations';

type Animation = {
  animation?: `singleClick` | `dashbaord`;
};

export const animationData = ({ animation }: Animation) => {
  if (animation === `singleClick`) return singleClick;
  return dashboard;
};

export const Animation: React.FC<Animation> = props => (
  <Lottie
    height={`auto`}
    width={`auto`}
    options={{
      loop: false,
      autoplay: true,
      animationData: props.animation || singleClick,
      rendererSettings: {
        preserveAspectRatio: `xMidYMid slice`,
      },
    }}
  />
);
