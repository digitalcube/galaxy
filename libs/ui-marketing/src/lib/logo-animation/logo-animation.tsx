import './logo-animation.module.css';
import Lottie from "lottie-react";
import LabworksAnimation from 'apps/frontend/public/animations/logoanim.json'
/* eslint-disable-next-line */
export interface LogoAnimationProps {}

export function LogoAnimation(props: LogoAnimationProps) {
  return (
    <Lottie animationData={LabworksAnimation} />
  );
}

export default LogoAnimation;
