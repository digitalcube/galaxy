import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@galaxy/ui';
import LogoAnimation from '../logo-animation/logo-animation'

/* eslint-disable-next-line */
export interface HeroSimpleIllustrationProps {
  title: string;
  description: string;
  action: Record<string, string>;
  image: string | Record<string, string>;
  href: string;
  children: ReactNode;
}

export function HeroSimpleIllustration(props: HeroSimpleIllustrationProps) {
  const { title, description, action } = props;
  return (
    <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-28 lg:overflow-hidden">
      <div className="mx-auto container lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center z-10">
            <div>
              <h1 className="text-[7.25rem] font-bold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl leading-none">
                {title}
              </h1>
              <p className="pt-10 text-size-6 text-gray-800 sm:mt-5">
                {description}
              </p>
              <Link href={`${action.href}`}>
                <Button variant="link" className="px-0 py-0 mt-10 font-size-7">
                  {action.title}
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6">
              <img className="w-full" src="/labworks-browser.svg" alt="" />
             <div className="w-50 absolute top-1/4 right-0">
              <LogoAnimation/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSimpleIllustration;

HeroSimpleIllustration.defaultProps = {
  action: {
    title: 'Learn more',
  },
  title: 'Research Experiment Innovate',
  description:
    'Labworks is a full service agency from DigitalCube focusing on cutting edge WordPress solutions',
};
