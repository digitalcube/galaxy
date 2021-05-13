import React, { useRef } from 'react';
import lottie from 'lottie-web';
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

export const Animation: React.FC<Animation> = ({ animation }: Animation) => {
  const element = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    lottie.loadAnimation({
      container: element.current as HTMLDivElement,
      loop: false,
      autoplay: true,
      animationData: animationData({ animation }),
      rendererSettings: {
        preserveAspectRatio: `xMidYMid slice`,
      },
    });
  }, [animation]);

  return <div ref={element}></div>;
};
