import React from 'react';
import Lottie from 'react-lottie';
import { dashboardAnimationData } from './datasets/dashboard';

type AnimationComponentProps = {
  animation?: any;
};

export const Animation: React.FC<AnimationComponentProps> = props => (
  <Lottie
    options={{
      loop: false,
      autoplay: true,
      animationData: props.animation || dashboardAnimationData,
      rendererSettings: {
        preserveAspectRatio: `xMidYMid slice`,
      },
    }}
  />
);
