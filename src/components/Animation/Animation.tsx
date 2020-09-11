import React from 'react';
import Lottie from 'react-lottie';
import { singleClick, dashboard } from './animations';

type Animation = {
  animation?: `singleClick` | `dashboard`;
};

const animations = {
  singleClick: singleClick,
  dashboard: dashboard,
};

export const animationData = ({ animation = `singleClick` }: Animation) => {
  return animations[animation];
};

export const Animation: React.FC<Animation> = ({ animation }) => {
  return (
    <Lottie
      height={`auto`}
      width={`auto`}
      options={{
        loop: false,
        autoplay: true,
        animationData: animationData({ animation: animation }),
        rendererSettings: {
          preserveAspectRatio: `xMidYMid slice`,
        },
      }}
    />
  );
};
